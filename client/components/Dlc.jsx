import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import dlcData from '../../data/dlcs'
import AddReview from './AddReview'

function Dlc() {
  const { code } = useParams()
  const dlc = dlcData.find((data) => data.code === code)

  return (
    <div className="blog-container">
      <div className="blog-box">
        <div className="blog-header"></div>
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
        <div>
          <AddReview />
        </div>
      </div>
    </div>
  )
}

export default Dlc
