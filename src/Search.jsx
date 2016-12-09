import React, { Component, PropTypes } from 'react'

// 'pure' or 'dumb' component in that it has no state; just displays
const Event = (props) => (
  <div>
    <h3>{props.name}</h3>
    <p>{props.startDate}</p>
    <p>{props.endDate}</p>
  </div>
)

class Search extends Component {
  constructor(){
    super()
    this.state = { filterText: '', searchTerm: '' }
  }

  handleChange(e){
    this.setState({searchTerm: e.target.value})
  }

  render(){
    return (
      <div>
        <span>Search Events: </span>
        <input type="text" name="searchTerm"
          value={this.state.searchTerm}
          onChange={this.handleChange.bind(this)}
        />
        <div className="events">
          {this.props.events
            .filter((event) => event.name.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((event) => (
            <Event {...event} key={event.id} />
          ))}
        </div>
      </div>

    )
  }
}

Search.propTypes = {
  events: PropTypes.array
}

export default Search
