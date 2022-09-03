import React from 'react'
import { Link, useParams } from 'react-router-dom'

import gameData from '../../data/game'

function Game() {
  const game = useParams().game
  const image = gameData[game].image
  const dlcs = gameData[game].dlcs
  console.log(dlcs)

  return (
    <div>
      <h2>{game}</h2>
      <img src={image} />
      <div>
        {/* {dlcs.map((dlc) => {
          return <div>{dlc.name}</div>
        })} */}
      </div>
    </div>
  )
}

export default Game
