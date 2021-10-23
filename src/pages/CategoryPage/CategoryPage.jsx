import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {ProductsList} from '../../components/ProductsList'
import {MobileCartLink} from '../../components/MobileCartLink'
import {useSelector} from 'react-redux'

export const CategoryPage = () => {
    const {categoryName} = useParams()
    const [categoryProducts, setCategoryProducts] = useState(null)

    const products = useSelector(state => state.products)

    useEffect(() => {
        if (products) {
            setCategoryProducts(products.filter(obj => obj.category === categoryName))
        }
    }, [categoryName])

    const capitalizedTitle = `${categoryName.charAt(0).toUpperCase()}${categoryName.slice(1, categoryName.length)}`

    return (
        <div className="wrapper">
            <MobileCartLink />
            <ProductsList products={categoryProducts} title={capitalizedTitle} />
        </div>
    )
}