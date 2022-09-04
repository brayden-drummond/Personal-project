import React, { useState, useEffect } from 'react'
import { getCharacters } from '../../apiClient'

function Characters() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    return getCharacters().then((characters) => {
      setCharacters(characters)
    })
  }),
    [characters]

  return (
    <div>
      <ul>{console.log(characters)}</ul>
    </div>
  )
}

export default Characters
