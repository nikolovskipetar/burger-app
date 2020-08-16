import React from 'react'
import classes from './index.css'
import Logo from '../../logo'
import NavigationItems from '../navigation-items'
import DrawerToggle from '../sidedrawer/drawerToggle'

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <Logo/>
    <nav className={classes.DesktopOnly}>
      <NavigationItems/>
    </nav>
    <DrawerToggle clicked={props.drawerToggleClicked}/>
  </header>
)

export default toolbar