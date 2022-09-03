import React from 'react'
import { Link, useParams } from 'react-router-dom'

import destiny2Data from '../../data/destiny2'

function Dlc() {
  const { id } = useParams()
  const dlc = destiny2Data.find((data) => {
    data.id === id
  })

  console.log(dlc)

  return (
    <div>
      <p>hello</p>
    </div>
  )
}

export default Dlc
