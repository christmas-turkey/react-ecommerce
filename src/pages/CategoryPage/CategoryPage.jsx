import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {ProductsList} from '../../components/ProductsList'
import {CornerCartLink} from '../../components/CornerCartLink'
import {useSelector} from 'react-redux'

export const CategoryPage = () => {
    const {categoryName} = useParams()
    const [categoryProducts, setCategoryProducts] = useState(null)

    const products = useSelector(state => state.products)

    useEffect(() => {
        if (products) {
            setCategoryProducts(products.filter(item => item.category === categoryName))
        }
    }, [])

    const capitalizedTitle = `${categoryName.charAt(0).toUpperCase()}${categoryName.slice(1, categoryName.length)}`

    return (
        <div className="wrapper">
            <CornerCartLink />
            <ProductsList products={categoryProducts} title={capitalizedTitle} />
        </div>
    )
}