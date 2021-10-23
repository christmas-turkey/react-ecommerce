import classes from './CornerCartLink.module.scss'
import React from 'react'
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import classnames from 'classnames'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'

export const CornerCartLink = () => {
    
    const totalCartItems = useSelector(state => state.cart.totalQuantity)
    
    return (
        <NavLink to="/cart" className={classes.container}>
            <FontAwesomeIcon icon={faCartArrowDown} size="lg" />
            {!!totalCartItems && (
              <div className={classnames('counter', classes.counter)}>{totalCartItems}</div>
            )}
        </NavLink>
    )
}
