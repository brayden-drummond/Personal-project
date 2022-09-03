import React from 'react'
import { Link, useParams } from 'react-router-dom'

import gameData from '../../data/game'

function Game() {
  const game = useParams().game
  const image = gameData[game].image
  const dlcs = gameData[game].dlcs

  return (
    <div>
      <h2>{game}</h2>
      <img src={image} />
      <div>
        <ul>
          {dlcs.map((dlc) => {
            return (
              <li key={dlc.name}>
                <Link to={`/${game}/Season${dlc.season}`}>{dlc.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Game
