import React from 'react'
import classes from './index.css'

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button disabled={props.disabled} className={classes.Less} onClick={props.removed}>Remove</button>
    <button className={classes.More} onClick={props.added}>Add</button>
  </div>
)

export default buildControl