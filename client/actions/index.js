import {
  getCharacters,
  addNewCharacter,
  deleteACharacter,
} from '../apis/characters'

export const SET_LOADING = 'SET_LOADING'
export const SET_CHARACTERS = 'SET_CHARACTERS'
export const DELETE_CHARACTERS = 'DELETE_CHARACTERS'

export function setCharacters(characters) {
  return {
    type: SET_CHARACTERS,
    payload: characters,
  }
}

export function setLoading() {
  return {
    type: SET_LOADING,
  }
}

export function deleteCharacter(character) {
  return {
    type: 'DELETE_CHARACTERS',
    payload: character,
  }
}

export function fetchCharacters() {
  return (dispatch) => {
    dispatch(setLoading())
    return getCharacters().then((characters) => {
      dispatch(setCharacters(characters))
      return null
    })
  }
}

export function addCharacter(newCharacter) {
  return (dispatch) => {
    return addNewCharacter(newCharacter).then(() => {
      dispatch(fetchCharacters())
      return null
    })
  }
}

export function delCharacter(character) {
  return (dispatch) => {
    return deleteACharacter(character).then(() => {
      console.log(character)
      dispatch(fetchCharacters())
      return null
    })
  }
}
