import React from 'react'
import {RedirectScreen} from '../../components/RedirectScreen'

export const _404 = () => {

    return (
        <div className="wrapper">
            <RedirectScreen
              message="It seems this page doesn't exist"
              mainBlock={<h1 style={{color: "#85051C", fontSize: "72px", marginBottom: "25px"}}>404</h1>} />
        </div>
    )
}
