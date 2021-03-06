import React, { Component, PropTypes } from 'react';
import 'whatwg-fetch'
import './App.css';
import EventForm from './EventForm'
import List from './List'

import logo from './logo.svg';
import fetchEvents from './event-api.js'
// import localData from './local-data'

class App extends Component {
  constructor(){
    super()
    this.state = { events: [] }
    this.handleCreateEvent = this.handleCreateEvent.bind(this)
  }

  componentDidMount(){
    fetchEvents().then((events) => {
      this.setState({ events: events })
    })
    // for development:
    // console.log('LOADING LOCAL DATA COPY - CHANGE TO API CALL')
    // this.setState({ events: localData.results})
  }

  handleCreateEvent(title, start, end){
    // if updating remote data, save state in case of error:
    /* let prevState = this.state */
    let ID_snippet = Math.random()
    let newEvent = { id: Date.now(), title: title, start_time: start, end_time: end }
    let newEventList = this.state.events.concat(newEvent)
    this.setState({ events: newEventList })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">Eventable Dashboard</h2>
        </div>
        <div className="App-intro">
          <List events={this.state.events} />
          <EventForm newEvent={this.handleCreateEvent}/>
        </div>
      </div>
    );
  }

}

App.propTypes = {
  name: PropTypes.string
}

export default App;
