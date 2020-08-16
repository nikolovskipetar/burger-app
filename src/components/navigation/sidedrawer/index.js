import React from 'react'
import Logo from '../../logo'
import NavigationItems from '../navigation-items'
import classes from './index.css'
import Backdrop from '../../ui/backdrop'
import Aux from '../../../hoc/Auxiliary'

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close]
  if(props.show) {
    attachedClasses = [classes.SideDrawer, classes.Open]
  }
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <Logo />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
}

export default sideDrawer