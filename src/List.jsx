import React, { Component, PropTypes } from 'react'
import Search from './Search'

const Event = (props) => (
  <div>
    <h3>{props.title}</h3>
    <p>start: {props.startTime}</p>
    <p>end: {props.endTime}</p>
  </div>
)

class List extends Component {
  constructor() {
    super()
    // console.log('this.props in List constructor:', this.props)
    this.state = { events: [] }
  }

  componentWillReceiveProps(nextProps){
    this.setState({ events: nextProps.events })
  }

  filterBySearchTerm(searchTerm){
    console.log('events in list:', this.props.events)
    console.log('searchTerm in List:', searchTerm)
    console.log('list state:', this.state.events)

    let filteredEvents = this.state.events.filter(
      (event) => event.title.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0
    )
    this.setState({ events: filteredEvents })
  }

  _map(events){
    return events.map((event) => (
      <Event {...event} startTime={event.start_time} endTime={event.end_time} key={event.id} />
    ))
  }

  render(){
    return (
      <div>
        <Search events={this.props.events} handleSearchTerm={this.filterBySearchTerm.bind(this)}/>
        <br/>
        {this._map(this.state.events)}
      </div>
    )
  }

}

List.propTypes = {
  events: PropTypes.array.isRequired
}

export default List
