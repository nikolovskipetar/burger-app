import React from 'react'
import Aux from '../../hoc/Auxiliary'
import classes from './index.css'

const layout = (props) => (
  <Aux>
    <div>Toolbar, sidedrawer, backgrop</div>
    <main className={classes.content}>
      {props.children}
    </main>
  </Aux>
)

export default layout