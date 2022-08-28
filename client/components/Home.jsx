import React from 'react'

function Home() {
  return (
    <div className="home">
      <div>
        <img
          className="home-image"
          src="https://wallpaperaccess.com/full/34604.jpg"
        ></img>
      </div>
      <div className="home-text-container">
        <div className="home-text-1">
          <div>
            <h2>Follow me</h2>
            <p>Text</p>
          </div>
        </div>
        <div className="home-text-2">
          <div>
            <h2>Bungie website</h2>
            <p>Text</p>
          </div>
        </div>
        <div className="home-text-3">
          <div>
            <h2>Gameplay videos</h2>
            <p>Text</p>
          </div>
        </div>
        <div className="home-text-4">
          <div>
            <h2>Other Games</h2>
            <p>Text</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
