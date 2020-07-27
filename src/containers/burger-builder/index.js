import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/burger'
import BuildControls from '../../components/burger/build-controls'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      tomato: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 4
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const updatedValue = oldCount + 1;
    const updatedIngrediends = {
      ...this.state.ingredients
    }

    updatedIngrediends[type] = updatedValue
    const price = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + price

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngrediends
    })
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    if (oldCount <= 0) {
      return
    }
    const updatedValue = oldCount - 1;
    const updatedIngrediends = {
      ...this.state.ingredients
    }

    updatedIngrediends[type] = updatedValue
    const price = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - price

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngrediends
    })
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder