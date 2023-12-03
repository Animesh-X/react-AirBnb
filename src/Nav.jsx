import React from "react"
import airbnb from "./assets/airbnb-logo.png"
import './Nav.css'

export default function Nav(){
    return (
        <div className="nav">
            <img className="airbnb-logo" src={airbnb} alt="AirBnb Logo"/>
        </div>
    )
}