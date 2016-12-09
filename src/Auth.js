import 'whatwg-fetch'

// used to get the token:
const productionServer = 'https://api.eventable.com/v1/token-auth/'
const credentials = {
    'username': 'candidate.5545@eventable.com',
    'password': 'R8VMaFVK'
  };

// use for testing:
const mockServerURL = 'https://private-anon-e415368f24-eventable.apiary-mock.com/v1/token-auth/'
const testBody = {
    'username': 'tester@eventable.com',
    'password': 'testPassword'
  }

const TokenAuth = () => {

  return fetch(productionServer, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: (JSON.stringify(credentials))
  })
  .then((res) => {
    return res.json()
  })
  .then((jsonRes) => {
    console.log('token object:', jsonRes)
    return jsonRes
  })

}

export default TokenAuth
