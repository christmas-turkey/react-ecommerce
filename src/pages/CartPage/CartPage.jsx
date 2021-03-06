import classes from './CartPage.module.scss'
import React from 'react'
import {CartItem} from '../../components/CartItem'
import {OrderForm} from '../../components/OrderForm'
import {useSelector} from 'react-redux'
import {RedirectScreen} from '../../components/RedirectScreen'
import emptyCartImg from '../../assets/empty-cart.png'

export const CartPage = () => {

    const cartItems = Object.values(useSelector(state => state.cart.products))
    const totalPrice = useSelector(state => state.cart.totalPrice)

    return (
        <div className="wrapper">
          {cartItems.length
            ? (
              <div className={classes.cart}>
                <h2 className={classes.cart__title}>Your orders:</h2>
                <div className="delimeter"></div>
                <div className={classes.cart__content}>
                  <div className={classes.cart__products}>
                      {cartItems.map(obj => <CartItem productObject={obj} key={obj.id} />)}
                  </div>
                  <OrderForm />
                </div>
                <div className="delimeter"></div>
                <div className={classes.cart__payment}>
                  <h4>Overall: <span className={classes.cart__payment__price}>{totalPrice}$</span></h4>
                  <button onClick={() => alert('Order accepted')} className="button-red">Order</button>
                </div>
              </div>
            )
            : <RedirectScreen 
                message="There is no items in cart yet" 
                mainBlock={<img className={classes.emptyCartImg} src={emptyCartImg} />} />
            }
        </div>
    )
}