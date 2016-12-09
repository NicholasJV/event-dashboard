import React, { Component, PropTypes } from 'react';
import './App.css';
import logo from './logo.svg';
import Search from './Search'
import Form from './Form'
import { events as testEvents } from './testData'

class App extends Component {
  constructor(){
    super()
    this.state = { events: [] }
    this.handleCreateEvent = this.handleCreateEvent.bind(this)
  }

  componentDidMount(){
    this.setState({ events: testEvents })

    // replace with API request

  }

  handleCreateEvent(name, start, end){
    // would save state if updating remotely:
    /* let prevState = this.state */
    let newEvent = { id: Date.now(), name: name, start: start, end: end }
    // using concat() because it's non-destructive (treat state as immutable)
    console.log(this.state.events)
    let newEventList = this.state.events.concat(newEvent)
    // setState triggers a re-render
    this.setState({ events: newEventList })

    console.log('=-=-=-=-=   NEW EVENT: ', name, '  end', end, '  start', start)
    console.log('newEvents: ', newEventList)
    console.log('App.state after update:', this.state)

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Eventable Dashboard</h2>
        </div>
        <div className="App-intro">
          <Search events={this.state.events}/>
          <br/>
          <Form newEvent={this.handleCreateEvent}/>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string
}

export default App;
