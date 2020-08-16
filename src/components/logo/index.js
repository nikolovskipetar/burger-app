import React from 'react'
import logoImg from '../../assets/images/logo.png'
import classes from './index.css'

const logo = () => (
  <div className={classes.Logo}>
    <img src={logoImg} alt="logo"/>
  </div>
)

export default logo