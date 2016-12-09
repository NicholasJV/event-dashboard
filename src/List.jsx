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
  }

  handleSearchTerm(){

  }

  render(){
    return (
      <div>
        <Search events={this.props.events}/>
        <br/>

      </div>
    )
  }

}

export default List
