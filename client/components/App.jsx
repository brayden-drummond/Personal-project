import React from 'react'

import { Routes, Route } from 'react-router-dom'

// import Heading from '../../images/main-destiny-heading.png'

import Home from './Home'
import Nav from './Nav'
import Game from './Game'
import Dlc from './Dlc'
import Characters from './API/Characters'

function App() {
  return (
    <>
      <div className="title">
        {/* <img src={Heading}></img> */}
        <h1>Destiny</h1>
      </div>
      <div className="main">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:game" element={<Game />} />
          <Route path="/:game/:code" element={<Dlc />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </div>
    </>
  )
}

export default App
