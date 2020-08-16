import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/burger'
import BuildControls from '../../components/burger/build-controls'
import Modal from '../../components/ui/modal'
import OrderSummary from '../../components/burger/order-summary'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
  tomato: 0.5
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
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  }

  updatePurchaseState(ingredients) {
    const sum = Object.values(ingredients).reduce((sum, el) => {
      return sum + el
    }, 0)

    this.setState({ purchasable: sum > 0 })
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

    this.updatePurchaseState(updatedIngrediends)
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

    this.updatePurchaseState(updatedIngrediends)
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true })
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false })
  }

  purchaseContinueHandler = () => {
    alert('WOW nice !')
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
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseCanceled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          ordered={this.purchaseHandler}
          purchasable={this.state.purchasable}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder