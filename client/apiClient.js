// eslint-disable-next-line no-unused-vars
import request from 'superagent'
// eslint-disable-next-line no-unused-vars
const charactersUrl = '/api/v1/characters'

export function getCharacters() {
  return request.get(charactersUrl).then((res) => {
    return res.body
  })
}
