import 'whatwg-fetch'

const EventableAPI = { 'events': 'https://api.eventable.com/v1/events/' }
const myToken = '7761e7e3b25a1d6d315901fcd7180d971f77ea2e'
// To get a new token, import and call auth():
// import Auth from './Auth'

const fetchEvents = () => {

  return fetch( EventableAPI.events, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${myToken}`
    }
  }).then((res) => { return res.json() })
  .then((json) => {
    return json.results
  })
  // add error handling

}

export default fetchEvents
