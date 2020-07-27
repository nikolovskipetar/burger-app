import React from 'react'
import classes from './index.css'
import Backdrop from '../backdrop'
import Aux from '../../../hoc/Auxiliary'

const modal = (props) => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div className={classes.Modal}
      style={{
        transform: props.show ? 'transalteY(0)' : 'transalteY(-100vh)',
        opacity: props.show ? '1' : '0',
        zIndex: props.show ? '501' : '-501'
      }}
    >
      {props.children}
    </div>
  </Aux>
)

export default modal