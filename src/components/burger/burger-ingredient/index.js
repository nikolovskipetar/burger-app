import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from './index.css'

class BurgerIngredient extends Component {
  render() {
    let ingredient = null

    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={classes.BreadBottom}></div>
        break
      case ('bread-top'):
        ingredient = (
          // <div className={classes.BreadTop}>
          <div className={classes.BreadTop}>
            <div className={classes.Seeds}></div>
            <div className={classes.Seeds}></div>
            <div className={classes.Seeds}></div>
            <div className={classes.Seeds}></div>
            <div className={classes.Seeds}></div>
            <div className={classes.Seeds}></div>
            <div className={classes.Seeds}></div>
            <div className={classes.Seeds}></div>
            <div className={classes.Seeds}></div>
            <div className={classes.Seeds}></div>
          </div>
          // </div>
        )
        break
      case ('tomato'):
        ingredient = (
          <div className={classes.Tomato}>
            <div className={classes.TomatoEl}></div>
            <div className={classes.TomatoEl}></div>
            <div className={classes.TomatoEl}></div>
          </div>
        )
        break

      case ('cheese'):
        ingredient = (
          <div className={classes.Cheese}>
            <div className={[classes.CheeseEl, classes.CheeseElBig]}></div>
            <div className={[classes.CheeseEl, classes.CheeseElSmall, classes.CheeseElSmallRight]}></div>
            <div className={[classes.CheeseEl, classes.CheeseElSmall, classes.CheeseElSmallLeft]}></div>
          </div>
        )
        break
      case ('bacon'):
        ingredient = (
          <div className={classes.Bacon}>
            <div className={[classes.BaconEl, classes.BaconElBig]}></div>
            <div className={[classes.BaconEl, classes.BaconElSmall, classes.BaconElSmallRight]}></div>
            <div className={[classes.BaconEl, classes.BaconElSmall, classes.BaconElSmallLeft]}></div>
          </div>
        )
        break
      case ('meat'):
        ingredient = (
          <div className={classes.Meat}>
            <div className={classes.Meat1}></div>
            <div className={classes.Meat2}>
              <div className={classes.MeatEl}></div>
              <div className={classes.MeatEl}></div>
              <div className={classes.MeatEl}></div>
              <div className={classes.MeatEl}></div>
              <div className={classes.MeatEl}></div>
              <div className={classes.MeatEl}></div>
              <div className={classes.MeatEl}></div>
              <div className={classes.MeatEl}></div>
              <div className={classes.MeatEl}></div>
              <div className={classes.MeatEl}></div>
              <div className={classes.MeatEl}></div>
              <div className={classes.MeatEl}></div>
              <div className={classes.MeatEl}></div>
              <div className={classes.MeatEl}></div>
              <div className={classes.MeatEl}></div>
            </div>
          </div>
        )
        break
      case ('salad'):
        ingredient = (
          <div className={classes.Salad}>
            <div className={classes.Salad1}>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
            </div>
            <div className={classes.Salad2}>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
              <div className={classes.SaladItem}></div>
            </div>
          </div>
        )
        break
      default:
        ingredient = null
    }

    return ingredient
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngredient