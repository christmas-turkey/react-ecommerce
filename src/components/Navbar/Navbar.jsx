import classes from './Navbar.module.scss'
import React, { useEffect, useRef, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone, faTimes, faFish, faWineBottle, faDrumstickBite, faBars, faCartArrowDown} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group'
import classnames from 'classnames'
import {useSelector} from 'react-redux'

export const Navbar = () => {

    const [drawerOpened, setDrawerOpened] = useState(false)
    const navbarRef = useRef()
    const totalCartItems = useSelector(state => state.cart.totalQuantity)

    const closeDrawer = () => setDrawerOpened(false)

    useEffect(() => {
        document.addEventListener('click', e => {
            const path = e.path || (e.composedPath && e.composedPath())
            if (!path.includes(navbarRef.current)) {
                closeDrawer()
            }
        })
    }, [])

    return (
        <div ref={navbarRef}>
            <div className={classes.navbar}>
                <NavLink className={classes.navbar__logo} to="/">
                    <h2>
                        <span style={{color: '#85051C'}}>Sushi</span>
                        <span style={{color: '#FF9900'}}>Master</span>
                    </h2>
                    <div className={classes.navbar__logo__phoneNumber}>
                        <FontAwesomeIcon icon={faPhone} />
                        <span>+380 (096) 123 456</span>
                    </div>
                </NavLink>
                <nav>
                    <NavLink activeClassName={classes.active} className={classnames('transition', classes.navbar__link)} to="/" exact>Main</NavLink>
                    <NavLink activeClassName={classes.active} className={classnames('transition', classes.navbar__link)} to="/menu">Menu</NavLink>
                    <NavLink activeClassName={classes.active} className={classnames('transition', classes.navbar__link)} to="/about">About</NavLink>
                </nav>
                <div>
                <NavLink className={classnames('button-orange', classes.navbar__cart)} to="/cart">
                    {!totalCartItems && (
                        <FontAwesomeIcon icon={faCartArrowDown} />
                    )}
                    Cart
                    {!!totalCartItems && (
                        <span className={classnames('counter', classes.navbar__cart__counter)}>{totalCartItems}</span>
                    )}
                </NavLink>
                </div>
                <FontAwesomeIcon className="transition" color="#85051C" onClick={() => setDrawerOpened(true)} className={classes.navbar__burger} icon={faBars} size="lg" />
            </div>
            <CSSTransition
              in={drawerOpened}
              timeout={500}
              classNames={{
                  exit: classes.drawer_exit,
                  exitActive: classes.drawer_exitActive,
                  enter: classes.drawer_enter,
                  enterActive: classes.drawer_enterActive
              }}
              unmountOnExit
              mountOnEnter
              >
            <div className={classes.drawer}>
                <div className={classes.drawer__wrapper}>
                <FontAwesomeIcon className="transition" onClick={closeDrawer} color="#878787" size="lg" icon={faTimes} />
                <div className="delimeter"></div>
                <div className={classes.drawer__categories}>
                    <NavLink to="/category/sushi" onClick={closeDrawer} className={classnames('transition', classes.drawer__categories__link)}>
                        <FontAwesomeIcon size="2x" icon={faFish} />
                        <span>Sushi</span>
                    </NavLink>
                    <NavLink to="/category/appetizers" onClick={closeDrawer} className={classnames('transition', classes.drawer__categories__link)}>
                        <FontAwesomeIcon size="2x" icon={faDrumstickBite} />
                        <span>Appetizers</span>
                    </NavLink>
                    <NavLink to="/category/beverages" onClick={closeDrawer} className={classnames('transition', classes.drawer__categories__link)}>
                        <FontAwesomeIcon size="2x" icon={faWineBottle} />
                        <span>Beverages</span>
                    </NavLink>
                </div>
                <div className="delimeter"></div>
                <nav>
                    <div>
                      <NavLink onClick={closeDrawer} activeClassName={classes.active} className={classnames('transition', classes.drawer__link)} to="/" exact>Main</NavLink>
                    </div>
                    <div>
                      <NavLink onClick={closeDrawer} activeClassName={classes.active} className={classnames('transition', classes.drawer__link)} to="/menu">Menu</NavLink>
                    </div>
                    <div>
                      <NavLink onClick={closeDrawer} activeClassName={classes.active} className={classnames('transition', classes.drawer__link)} to="/about">About</NavLink>
                    </div>
                    <div>
                      <NavLink onClick={closeDrawer} activeClassName={classes.active} className={classnames('transition', classes.drawer__link)} to="/cart">Cart</NavLink>
                    </div>
                </nav>
                </div>
            </div>
            </CSSTransition>
        </div>
    )
}
