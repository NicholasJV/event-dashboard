import React from 'react'

// 'pure' or 'dumb' component to simply display data
const Event = (props) => (
  <div className="event">
    <h3>{props.title}</h3>
    <p>start: {props.startTime}</p>
    <p>end: {props.endTime}</p>
  </div>
)

export default Event
