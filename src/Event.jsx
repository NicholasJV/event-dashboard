import React from 'react'

const Event = (props) => (
  <div className="event">
    <h3>{props.title}</h3>
    <p>start: {props.startTime}</p>
    <p>end: {props.endTime}</p>
  </div>
)

export default Event
