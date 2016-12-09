import React, { Component, PropTypes } from 'react'
// import { Button, FormControl, FormGroup } from 'react-bootstrap'

// 'pure' or 'dumb' component to simply display data
const Event = (props) => (
  <div>
    <h3>{props.title}</h3>
    <p>start: {props.startTime}</p>
    <p>end: {props.endTime}</p>
  </div>
)

class Search extends Component {
  constructor(){
    super()
    this.state = { searchTerm: '' }
  }

  handleChange(e){
    this.setState({searchTerm: e.target.value})
    this.props.handleSearchTerm(e.target.value)
  }

  render(){
    return (
      <div className="search-component">
        <span>Search Events: </span>
        <input type="text" name="searchTerm"
          value={this.state.searchTerm}
          onChange={this.handleChange.bind(this)}
        />
        <div className="events">
          {this.props.events
            .filter((event) => event.title.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((event) => (
            <Event {...event} startTime={event.start_time} endTime={event.end_time} key={event.id} />
          ))}
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  events: PropTypes.array
  // handleSearchTerm: PropTypes.function
}

export default Search
