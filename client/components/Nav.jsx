import React from 'react'
import { Link } from 'react-router-dom'

import gameData from '../../data/game'

function Nav() {
  const games = Object.keys(gameData)
  return (
    <div className="topnav">
      {games.map((game) => {
        return (
          <p key={game}>
            <Link to={`/${game}`}>{game}</Link>
          </p>
        )
      })}
    </div>
  )
}

export default Nav
