import React, { Component, PropTypes } from 'react';
import './App.css';
import logo from './logo.svg';
import Search from './Search'
import Form from './Form'
import testData from './testData'

class App extends Component {
  constructor(){
    super()
    this.state = { events: [] }
    this.handleCreateEvent = this.handleCreateEvent.bind(this)
  }

  componentDidMount(){
    // API request here

  }

  handleCreateEvent(name, start, end){
    let prevState = this.state
    let newEvent = {}
    // using concat() because it's non-destructive
    let newEventList = this.state.events
    // mutate the state using a React method, rather than directly:
    this.setState({events: newEvents})


    // console.log('=-=-=-=-=   NEW EVENT: ', name, '  end', end, '  start', start

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Eventable Dashboard</h2>
        </div>
        <div className="App-intro">
          <Search events={testData.events}/>
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
