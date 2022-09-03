import React from 'react'
import { Link, useParams } from 'react-router-dom'

import dlcData from '../../data/dlcs'

function Dlc() {
  const { id } = useParams()
  const dlc = dlcData.find((data) => {
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
