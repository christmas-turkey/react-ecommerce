import React from 'react'
import classes from './ProductCard.module.scss'
import sushiImg from '../../assets/sushi.png'
import classnames from 'classnames'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import {useDispatch, useSelector} from 'react-redux'
import {addCartItem} from "../../redux/actions/cart"

export const ProductCard = ({productObject}) => {

    const dispatch = useDispatch()
    const cartProductObject = useSelector(state => state.cart.products[productObject.id])

    const addProductToCart = () => {
        const payload = {
            ...productObject,
            quantity: 1
        }

        dispatch(addCartItem(payload))
    }

    return (
        <div className={classes.product}>
            {productObject.new && (
                <div className={classes.product__new}>NEW!</div>
            )}
            {productObject.discount && (
                <div className={classes.product__discount}>{productObject.discount}</div>
            )}
            <img className={classes.product__img} src={productObject.image} />
            <h3 className={classes.product__name}>{productObject.name}</h3>
            {productObject.composition && (
                <p className={classes.product__composition}>{productObject.composition}</p>
            )}
            <div className={classes.product__description}>
                <h3 className={classes.product__weight}>{productObject.weight}</h3>
                <h3 className={classes.product__price}>{productObject.price}$</h3>
            </div>
            <button onClick={addProductToCart} className={classnames('button-red', classes.product__button)}>
                {cartProductObject 
                 ?  <div className={classnames('counter', classes.product__counter)}>
                      {cartProductObject.quantity}
                    </div>
                 :  <FontAwesomeIcon icon={faCartPlus} />
                }
                To cart
            </button>
        </div>
    )
}

ProductCard.propTypes = {
    productObject: PropTypes.object
}
