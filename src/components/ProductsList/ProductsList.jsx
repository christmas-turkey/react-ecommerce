import React from 'react'
import PropTypes from 'prop-types'
import classes from './ProductsList.module.scss'
import {ProductCard} from '../ProductCard'
import {ProductLoading} from '../../components/ProductLoading'

export const ProductsList = ({title, products}) => {
    return (
        <div className={classes.container}>
            <div className={classes.titleWrapper}>
              <h2 className={classes.title}>{title}</h2>
            </div>
            <div className={classes.productsContainer}>
                {products 
                  ?  
                  products.map(item => <ProductCard productObject={item} key={item.id} />)
                  :
                  new Array(5).fill(0).map((_, index) => <ProductLoading key={index} />)
                }
            </div>
        </div>
    )
}

ProductsList.propTypes = {
    title: PropTypes.string,
    products: PropTypes.arrayOf(PropTypes.object)
}
