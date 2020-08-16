import React, { Component } from 'react'
import classes from './index.css'
import Backdrop from '../backdrop'
import Aux from '../../../hoc/Auxiliary'

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className={classes.Modal}
          style={{
            transform: this.props.show ? 'transalteY(0)' : 'transalteY(-100vh)',
            opacity: this.props.show ? '1' : '0',
            zIndex: this.props.show ? '501' : '-501'
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    )
  }
}

export default Modal