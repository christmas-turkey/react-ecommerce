import classes from './HomePage.module.scss'
import React, { useEffect, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'
import beverageImg from '../../assets/coca-cola.png'
import appetizersImg from '../../assets/appetizers.png'
import sushiImg from '../../assets/sushi.png'
import bannerBackground from '../../assets/MainPage_banner.jpg'
import {ProductsList} from '../../components/ProductsList'
import {MobileCartLink} from '../../components/MobileCartLink'
import {useSelector} from 'react-redux'
import classnames from 'classnames'

export const HomePage = () => {

    const [salesProducts, setSalesProducts] = useState(null)
    const [newProducts, setNewProducts] = useState(null)
    const [popularProducts, setPopularProducts] = useState(null)

    const products = useSelector(state => state.products)

    useEffect(() => {
        if (products) {
            setSalesProducts(products.filter(item => item.discount))
            setNewProducts(products.filter(item => item.new === true))
            setPopularProducts(products.sort((a, b) => b.popularity - a.popularity))
        }
    }, [products])

    return (
        <div className="wrapper">
            <MobileCartLink />
            <div className={classnames('banner', classes.banner)}>
                <img alt="Banner" className={classes.banner__bg} src={bannerBackground} />
                <div className={classes.banner__content}>
                    <h1>Best sushi in your city</h1>
                    <h4>Order anywhere&anytime</h4>
                    <a href="#itemsList" className="button-red"><FontAwesomeIcon icon={faArrowDown} /> Order</a>
                </div>
            </div>
            <div className={classes.categories}>
                <NavLink to="/category/sushi" className={classes.categories__categoryCard}>
                    <img src={sushiImg} alt="Sushi" />
                    <h5>Sushi</h5>
                </NavLink>
                <NavLink to="/category/appetizers" className={classes.categories__categoryCard}>
                    <img src={appetizersImg} alt="Appetizers" />
                    <h5>Appetizers</h5>
                </NavLink>
                <NavLink to="/category/beverages" className={classes.categories__categoryCard}>
                    <img src={beverageImg} alt="Beverages" />
                    <h5>Beverages</h5>
                </NavLink>
            </div>
            <div id="itemsList">
              <ProductsList products={salesProducts} title="Sales" />
              <ProductsList products={newProducts} title="New" />
              <ProductsList products={popularProducts} title="Popular" />
            </div>
        </div>
    )
}