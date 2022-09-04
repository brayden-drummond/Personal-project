import React from 'react'
import { Link } from 'react-router-dom'

import gameData from '../../data/game'

function Nav() {
  const games = Object.keys(gameData)
  return (
    <div className="topnav">
      <div className="home-topnav">
        <p>
          <Link to={'/'}>Home</Link>
        </p>
      </div>
      <div className="game-topnav">
        {games.map((game) => {
          return (
            <p key={game}>
              <Link to={`/${game}`}>{game}</Link>
            </p>
          )
        })}
        <div className="characters-topnav">
          <p>
            <Link to={'/characters'}>Characters</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Nav
