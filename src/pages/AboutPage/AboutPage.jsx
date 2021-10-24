import classes from './AboutPage.module.scss'
import React from 'react'
import bannerBackground from '../../assets/AboutPage_banner.jpg'
import {faInstagram, faFacebook, faTelegram} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Map} from '../../components/Map'
import classnames from 'classnames'

export const AboutPage = () => {
    return (
        <div className="wrapper">
            <div className={classnames('banner', classes.banner)}>
                <img className={classes.banner__bg} src={bannerBackground} />
                <h1>About us</h1>
            </div>
            <div className={classes.about}>
                <div className={classes.about__card}>
                    <h2>Our mission</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    <h3>+380 (098) 123 456</h3>
                    <div className={classes.about__card__social}>
                        <a href="https://instagram.com"><FontAwesomeIcon className="transition" size="2x" icon={faInstagram} /></a>
                        <a href="https://telegram.com"><FontAwesomeIcon className="transition" size="2x" icon={faTelegram} /></a>
                        <a href="https://facebook.com"><FontAwesomeIcon className="transition" size="2x" icon={faFacebook} /></a>
                    </div>
                </div>
                 <Map
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div className={classes.about__map} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    mapCenter={{lat: 49.553516, lng: 25.594767}}
                    markerPosition={{lat: 49.553516, lng: 25.594767}}
                />
            </div>
        </div>
    )
}