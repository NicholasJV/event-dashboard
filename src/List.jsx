import React, { Component, PropTypes } from 'react'
import Search from './Search'
import Event from './Event'

class List extends Component {
  constructor() {
    super()
    this.state = { searchTerm: '' , sortedBy: 'title'}
    this._handleSearchTerm = this._handleSearchTerm.bind(this)
    this._handleSortValue = this._handleSortValue.bind(this)
    this._sort = this._sort.bind(this)
  }

  componentWillReceiveProps(nextProps){
    this.setState({ events: nextProps.events })
  }

  _handleSearchTerm(searchTerm) {
    this.setState({ searchTerm: searchTerm })
  }

  _handleSortValue(e){
    this.setState({sortedBy: e.target.value})
  }

  _filterBySearchTerm(events){
    return events.filter(
      (event) => event.title.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
    )
  }

  _sort(events){
    let sortType = this.state.sortedBy
    return events.sort((A, B) => A[sortType] > B[sortType] )
  }

  render(){
    return (
      <div className="event-list">
        <Search handleSearchTerm={this._handleSearchTerm}/>
        <br/>
        <span>sort by: &nbsp;</span>
        <select value={this.state.sortedBy} id="sort-select" onChange={this._handleSortValue}>
          <option value="title">Title</option>
          <option value="start_time">Date</option>
        </select>
        <h2>Events</h2>
        <div className="container">
          {this._sort(this._filterBySearchTerm(this.props.events))
            .map((event) => (
              <Event {...event} startTime={event.start_time} endTime={event.end_time} key={event.id} />
          ))}
        </div>
      </div>
    )
  }

}

List.propTypes = {
  events: PropTypes.array.isRequired
}

export default List
