import React, { useState } from 'react'
import classes from './OrderForm.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGlobe, faTruck} from '@fortawesome/free-solid-svg-icons'
import classnames from 'classnames'

export const OrderForm = () => {
    const [payOnline, setPayOnline] = useState(false)

    return (
        <div className={classes.form}>
            <h2 className={classes.form__title}>Delivery</h2>
            <div className={classes.form__paymentMethods}>
                <button  
                    onClick={() => setPayOnline(true)} 
                    className={classnames({[classes.active]: payOnline},
                                          {transition: !payOnline })}>
                        <FontAwesomeIcon icon={faGlobe} /> <span>Pay online</span>
                </button>
                <button 
                    onClick={() => setPayOnline(false)} 
                    className={classnames({[classes.active]: !payOnline},
                                          {transition: payOnline})}>
                        <FontAwesomeIcon icon={faTruck} /> <span>Pay on Delivery</span>
                </button>
            </div>
            <div className={classes.form__data}>
                <h3>Contacts</h3>
                <input type="text" placeholder="Your name" />
                <input type="email" placeholder="Your email" />
                <input type="tel" placeholder="Your phone number" />
            </div>
            <div className={classes.form__data}>
                <h3>Adress</h3>
                <input type="text" placeholder="Street" />
                <input type="text" placeholder="Building number" />
                <input type="text" placeholder="Entrance number" />
                <input type="text" placeholder="Flat number" />
            </div>
            <div className={classes.form__data}>
                <h3>Delivery time</h3>
                <input type="time" defaultValue={`${new Date().getHours() + 1}:${new Date().getMinutes()}`} />
            </div>
            {payOnline && (
                <div className={classes.form__data}>
                    <h3>Your card info</h3>
                    <input type="text" placeholder="Card number" />
                </div>
            )}
        </div>
    )
}
