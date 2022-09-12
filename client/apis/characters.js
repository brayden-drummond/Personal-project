import request from 'superagent'

const rootUrl = '/api/v1'

export function getCharacters() {
  return request.get(rootUrl + '/characters').then((res) => {
    return res.body
  })
}

export function addNewCharacter(newCharacter) {
  return request
    .post(rootUrl + '/characters')
    .send({ newCharacter })
    .then((res) => {
      return res.body
    })
}
