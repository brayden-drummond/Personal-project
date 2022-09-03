import React from 'react'
import { Link, useParams } from 'react-router-dom'

import dlcData from '../../data/dlcs'

function Dlc() {
  const { code } = useParams()
  const dlc = dlcData.find((data) => data.code === code)

  return (
    <div className="blog-container">
      <div className="blog-header">{dlc.dlcName}</div>
      <img className="blog-image" src={`/images/${dlc.image}`} />
      <div>
        <h3>About</h3>
        <div className="blog-about">{dlc.about}</div>
      </div>
      <div>
        <h3>Activities</h3>
        <div className="blog-activities">{dlc.activities}</div>
      </div>
      <div>
        <h3>Reviews</h3>
        <div className="blog-review">{dlc.review}</div>
      </div>
    </div>
  )
}

export default Dlc
