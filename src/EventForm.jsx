import React, { Component, PropTypes } from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

class EventForm extends Component {
  constructor(props){
    super()
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleSubmit(e){
    let newEvent = e.target
    console.log(newEvent.title.value, newEvent.start.value, newEvent.end.value)
    this.props.newEvent(newEvent.title.value, newEvent.start.value, newEvent.end.value)
    newEvent.title.value = newEvent.start.value = newEvent.end.value = ''
    e.preventDefault()
  }

  getValidationState (){
    console.log('validation')
  }

  render() {
    return (
      <div className="new-event-form">
        <form onSubmit={this._handleSubmit}>
          <FormGroup>
            <FormControl type="text" name="title" ref="newEventTitle" placeholder="Title" />
            <FormControl.Static>
              enter date/time in format: <strong>YYYY-MM-DD T-00:00</strong>
            </FormControl.Static>
            <ControlLabel htmlFor="start">Start: </ControlLabel>
            <FormControl type="text" name="start" placeholder="date/time" />
            <ControlLabel htmlFor="end">End: </ControlLabel>
            <FormControl type="text" name="end" placeholder="date/time" />
            <Button className="add-button" type="submit" name="create"> &#43; </Button>
            <br/>
          </FormGroup>
        </form>
      </div>

    )
  }
}

Form.Proptypes = {
  newEvent: PropTypes.function
}

export default EventForm
