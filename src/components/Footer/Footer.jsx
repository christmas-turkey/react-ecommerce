import React from 'react'
import classes from './Footer.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faTelegram, faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'
import classnames from 'classnames'

export const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footer__contacts}>
                <h5><FontAwesomeIcon icon={faPhone} />+380 (096) 123 456</h5>
                <h5><FontAwesomeIcon icon={faEnvelope} />sushimaster@gmail.com</h5>
            </div>
            <div className={classes.footer__social}>
                <a href="https://instagram.com/"><FontAwesomeIcon className="transition" icon={faInstagram} size="3x" /></a>
                <a href="https://telegram.com"><FontAwesomeIcon className="transition" icon={faTelegram} size="3x" /></a>
                <a href="https://facebook.com"><FontAwesomeIcon className="transition" icon={faFacebook} size="3x" /></a>
            </div>
            <div className={classes.footer__navigation}>
                <NavLink to="/">
                    <h3 className={classes.footer__navigation__logo}>
                        <span style={{color: '#85051C'}}>Sushi</span>
                        <span style={{color: '#FF9900'}}>Master</span>
                    </h3>
                </NavLink>
                <nav className={classes.footer__navigation__linksContainer}>
                    <NavLink to="/" className={classnames('transition', classes.footer__navigation__link)}>Main</NavLink>
                    <NavLink to="/menu" className={classnames('transition', classes.footer__navigation__link)}>Menu</NavLink>
                    <NavLink to="/about" className={classnames('transition',classes.footer__navigation__link)}>About</NavLink>
                    <NavLink to="/cart" className={classnames('transition', classes.footer__navigation__link)}>Cart</NavLink>
                </nav>
            </div>
        </div>
    )
}
