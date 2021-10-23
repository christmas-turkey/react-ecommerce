import React, {useEffect, useState} from 'react'
import {ProductsList} from '../../components/ProductsList'
import {MobileCartLink} from '../../components/MobileCartLink'
import {useSelector} from 'react-redux'

export const MenuPage = () => {

    const [sushiProducts, setSushiProducts] = useState(null)
    const [appetizersProducts, setAppetizersProducts] = useState(null)
    const [beveragesProducts, setBeveragesProducts] = useState(null)

    const products = useSelector(state => state.products)

    useEffect(() => {
        if (products) {
            setSushiProducts(products.filter(item => item.category === "sushi"))
            setAppetizersProducts(products.filter(item => item.category === "appetizers"))
            setBeveragesProducts(products.filter(item => item.category === "beverages"))
        }
    }, [products])

    return (
        <div className="wrapper">
            <MobileCartLink />
            <ProductsList products={sushiProducts} title="Sushi" />
            <ProductsList products={beveragesProducts} title="Beverages" />
            <ProductsList products={appetizersProducts} title="Appetizers" />
        </div>
    )
}