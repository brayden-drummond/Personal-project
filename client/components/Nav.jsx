import React from 'react'
import { Link } from 'react-router-dom'

import destiny2Data from '../../data/destiny2'

function Nav() {
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        {destiny2Data.map((data) => {
          return (
            <li key={data.id}>
              <Link to={`/${data.id}`}>{data.dlc}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Nav
