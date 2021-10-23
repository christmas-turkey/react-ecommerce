import classes from './RedirectScreen.module.scss'
import React from 'react'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useHistory} from 'react-router-dom'
import PropTypes from 'prop-types'

export const RedirectScreen = ({mainBlock, message}) => {

    const history = useHistory()

    return (
        <div className={classes.redirect}>
            {mainBlock}
            <p>{message}</p>
            <button onClick={() => history.goBack()} className="button-orange">
                <FontAwesomeIcon icon={faArrowLeft} />
                Go back
            </button>
        </div>
    )
}

RedirectScreen.propTypes = {
    message: PropTypes.string,
    mainBlock: PropTypes.element
} 
