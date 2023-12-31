import React from 'react'
import star from './assets/star.png'
import "./Card.css"

export default function Card(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className='card'>
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className='card-image' src={props.img} alt='Review Image' />
            <div className='card-stats'>
                <img className='card-star' src={star} alt="Star" />
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className='card-title'>{props.title}</p>
            <p className='card-price'><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}