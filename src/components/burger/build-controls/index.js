import React from 'react'
import classes from './index.css'
import BuildControl from './build-control'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Tomato', type: 'tomato' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Meat', type: 'meat' },
]

const buildControls = (props) => (
  <div className={classes.BuildControlls}>
    {
      controls.map(i => (
        <BuildControl
          label={i.label}
          key={i.label}
          added={() => props.ingredientAdded(i.type)}
          removed={() => props.ingredientRemoved(i.type)}
          disabled={props.disabled[i.type]}
        />
      ))
    }
  </div>
)

export default buildControls