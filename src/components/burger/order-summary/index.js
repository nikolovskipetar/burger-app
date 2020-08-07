import React from 'react'
import Aux from '../../../hoc/Auxiliary'
import Button from '../../ui/button'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(key => {
    return <li key={key}><span style={{textTransform: 'uppercase'}}>{key}</span>: {props.ingredients[key]}</li>
  })

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicous burger with whe following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout ?</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  )
}

export default orderSummary