import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary'
import classes from './index.css'
import Toolbar from '../navigation/toolbar'
import SideDrawer from '../navigation/sidedrawer'

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: true })
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState}
    })
  }

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerClosedHandler} />
        <SideDrawer show={this.state.showSideDrawer} closed={this.sideDrawerToggleHandler} />
        <main className={classes.content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout