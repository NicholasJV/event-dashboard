import React, { Component, PropTypes } from 'react'
// import { Button, FormControl, FormGroup } from 'react-bootstrap'

class Form extends Component {
  constructor(props){
    super()
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleSubmit(e){
    e.preventDefault()
    let newEvent = e.target
    this.props.newEvent(newEvent.title.value, newEvent.start.value, newEvent.end.value)
    newEvent.title.value = newEvent.start.value = newEvent.end.value = ''
  }

  render() {
    return (
      <div className="new-event">
        <form action="" onSubmit={this._handleSubmit}>
          {/* <FormGroup controlId="formNewEvent" /> */}
          <input type="text" name="title" placeholder="Event Name" />
          <br/>
          <label htmlFor="start_time">Start:</label>
          <input type="text" name="start" placeholder="start date/time"/>
          <br/>
          <input type="text" name="end" placeholder="Start Date"/>
          <br/>
          <button type="submit" name="create"> Create New Event </button>
        </form>
      </div>

    )
  }
}

Form.Proptypes = {
  newEvent: PropTypes.function
}

export default Form
