import React from 'react'
import { Link, useParams } from 'react-router-dom'

import dlcData from '../../data/dlcs'

function Dlc() {
  const { code } = useParams()
  const dlc = dlcData.find((data) => data.code === code)

  return (
    <div className="blog-container">
      <div className="blog-header">{dlc.dlcName}</div>
      <div className="blog-image">
        <img src={`/images/${dlc.image}`} />
      </div>
      <div className="blog-about">{dlc.about}</div>
      <div className="blog-activities">{dlc.activities}</div>
      <div className="blog-review">{dlc.review}</div>
    </div>
  )
}

export default Dlc
