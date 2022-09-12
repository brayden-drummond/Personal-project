import { SET_CHARACTERS, DELETE_CHARACTERS, ADD_CHARACTERS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_CHARACTERS:
      return payload
    // case ADD_CHARACTERS:
    //   return [...state, payload]
    case DELETE_CHARACTERS:
      return state.filter((task) => task.id !== payload)
    default:
      return state
  }
}

export default reducer
