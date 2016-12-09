import React, { Component, PropTypes } from 'react'

class Form extends Component {
  constructor(props){
    super()
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleSubmit(e){
    e.preventDefault()
    let newEvent = e.target
    this.props.newEvent(newEvent.title.value, newEvent.start.value, newEvent.end.value)
  }

  render() {
    return (
      <form action="" onSubmit={this._handleSubmit}>
        <input type="text" name="title" placeholder="Event Name" />
        <br/>
        <input type="text" name="start" placeholder="Start Date"/>
        <input type="text" name="end" placeholder="Start Date"/>
        <br/>
        <button type="submit" name="newEvent"> Create New Event </button>
      </form>

    )
  }
}

Form.Proptypes = {
  newEvent: PropTypes.function
}

export default Form
