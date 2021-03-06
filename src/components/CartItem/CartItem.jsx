import React from 'react'
import classes from "./CartItem.module.scss"
import classnames from 'classnames'
import {faTimes, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import {useDispatch} from 'react-redux'
import {removeCartItem, plusCartItem, minusCartItem} from '../../redux/actions/cart'

export const CartItem = ({productObject}) => {

    const dispatch = useDispatch()

    const plusProduct = () => {
        dispatch(plusCartItem(productObject.id))
    }

    const minusProduct = () => {
        dispatch(minusCartItem(productObject.id))
    }

    const removeProduct = () => {
        dispatch(removeCartItem(productObject.id))
    }

    return (
        <div className={classes.product}>
            <FontAwesomeIcon onClick={removeProduct} icon={faTimes} size="lg" className={classnames('transition', classes.product__delete)} />
            <div className={classes.product__mainContent}>
                <img src={productObject.image} className={classes.product__mainContent__img} alt="Product image" />
                 <div className={classes.product__description}>
                    <h3 className={classes.product__description__name}>{productObject.name}</h3>
                    <p className={classes.product__description__composition}>{productObject.composition}</p>
                </div>
            </div>
            <div className={classes.product__details}>
                <div>
                    <h6 className={classes.product__details__weight}>{productObject.weight}</h6>
                    <h5 className={classes.product__details__price}>{(productObject.price * productObject.quantity).toFixed(2)}$</h5>
                </div>
                <div className={classes.product__details__quantity}>
                    <button onClick={plusProduct}><FontAwesomeIcon icon={faPlus} size="lg" /></button>
                    <h6>{productObject.quantity}</h6>
                    <button onClick={minusProduct}><FontAwesomeIcon icon={faMinus} size="lg" /></button>
                </div>
            </div>
        </div>
    )
}

CartItem.propTypes = {
    productObject: PropTypes.object
}