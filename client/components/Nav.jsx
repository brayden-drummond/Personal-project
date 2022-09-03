import React from 'react'
import { Link } from 'react-router-dom'

import gameData from '../../data/game'

function Nav() {
  const games = Object.keys(gameData)
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        {games.map((game) => {
          return (
            <li key={game}>
              <Link to={`/${game}`}>{game}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Nav
