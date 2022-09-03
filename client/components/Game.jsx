import React from 'react'
import { Link, useParams } from 'react-router-dom'

import gameData from '../../data/game'

function Game() {
  const game = useParams().game
  const image = gameData[game].image
  const dlcs = gameData[game].dlcs
  console.log(image)

  return (
    <div>
      <img className="game-banner-image" src={`/images/${image}`} />
      <div>
        <ul>
          {dlcs.map((dlc) => {
            return (
              <li key={dlc.name}>
                <Link to={`/${game}/${dlc.code}`}>{dlc.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Game
