import { useState } from 'react'
import Nav from "./Nav"
import NavHero from "./NavHero"
import Card from './Card'
import data from './data'
import './App.css'

function App() {
  const cards = data.map(item => {
    return (
        <Card 
            key={item.id}
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
            openSpots={item.openSpots}
        />
    )
})

  return (
    <>
      <Nav />
      <NavHero />
      <div className='cards-app'>
      {cards}
      </div>
      
    </>
  )
}

export default App
