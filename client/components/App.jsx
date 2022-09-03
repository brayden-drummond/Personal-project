import React from 'react'

import { Routes, Route } from 'react-router-dom'

// import Heading from '../../images/main-destiny-heading.png'

import Home from './Home'
import Nav from './Nav'
import Dlc from './Dlc'

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
          <Route path="/:dlc" element={<Dlc />} />
        </Routes>
      </div>
    </>
  )
}

export default App
