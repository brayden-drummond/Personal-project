import React from 'react'

import { Routes, Route } from 'react-router-dom'

// import Heading from '../../images/main-destiny-heading.png'

import Home from './Home'

function App() {
  return (
    <>
      <div className="title">
        {/* <img src={Heading}></img> */}
        <h1>Destiny</h1>
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
