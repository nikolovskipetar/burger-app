import React from 'react'
import classes from './index.css'

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <li>
      <a href="/" className={classes.Active}>Burger Builder</a>
    </li>
    <li>
      <a href="/">Checkout</a>
    </li>
  </ul>
)

export default navigationItems