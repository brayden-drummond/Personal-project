import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCharacters, delCharacter } from '../actions'
import AddCharacter from './AddCharacter'

// import Stack from 'react-bootstrap/Stack'
// import 'bootstrap/dist/css/bootstrap.min.css'

function Characters() {
  const characters = useSelector((state) => state.characters)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCharacters())
  }, [])

  return (
    <>
      <div className="character-main">
        <div className="character-container">
          <h1>Characters</h1>
          {/* <Stack gap={3}> */}
          {characters.map((character) => {
            return (
              <div className="character-box" key={character.id}>
                <div className="character-info">
                  <h3>{character.name}</h3>
                  <img
                    className="character-image"
                    src={`/images/${character.image}`}
                  />
                  <p>{character.class}</p>
                  <p>{character.bio}</p>
                  <button onClick={() => dispatch(delCharacter(character))}>
                    Delete
                  </button>
                </div>
              </div>
            )
          })}
        </div>
        {/* </Stack> */}
      </div>
      <AddCharacter />
    </>
  )
}

export default Characters
