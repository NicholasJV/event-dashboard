import React, { Component, PropTypes } from 'react'
import Search from './Search'
import Event from './Event'

// const Event = (props) => (
//   <div>
//     <h3>{props.title}</h3>
//     <p>start: {props.startTime}</p>
//     <p>end: {props.endTime}</p>
//   </div>
// )

class List extends Component {
  constructor() {
    super()
    // console.log('this.props in List constructor:', this.props)
    this.state = { searchTerm: '' }
  }

  componentWillReceiveProps(nextProps){
    this.setState({ events: nextProps.events })
  }

  _handleSearchTerm(searchTerm) {
    this.setState({ searchTerm: searchTerm })
  }

  _filterBySearchTerm(events){
    return events.filter(
      (event) => event.title.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
    )
  }

  render(){
    return (
      <div className="event-list">
        <Search handleSearchTerm={this._handleSearchTerm.bind(this)}/>
        <br/>
        <h2>Events</h2>
        {this._filterBySearchTerm(this.props.events)
          .map((event) => (
            <Event {...event} startTime={event.start_time} endTime={event.end_time} key={event.id} />
        ))}
      </div>
    )
  }

}

List.propTypes = {
  events: PropTypes.array.isRequired
}

export default List
