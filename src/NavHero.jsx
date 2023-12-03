import React from 'react'
import pictures from './assets/photo-grid.png'
import './NavHero.css'

export default function NavHero(){
    return (
        <div className='nav-hero'>
            <img className='nav-hero-img' src={pictures} alt="Image" />
            <h1 className='hero-header'>Online Experience</h1>
            <p className='hero-para'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}