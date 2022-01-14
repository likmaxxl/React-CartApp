import React,{useContext} from 'react'
import PropTypes from 'prop-types'
import {ContextProduct} from '../ContextProductsApp'
import CartItem from './CartItem'

const CartItems = (props) => {

  const value=useContext(ContextProduct)

  return (
    <>
    <div className="cartItemsAll">
    <table className="tableCart">
      <thead>
      <tr>
        <th colSpan="4">Cart</th>
      </tr>
      </thead>
      <tbody>
{
    value.cart&&value.cart.length>0?value.cart.map((cartItem)=>{
    return <CartItem key={cartItem.id}
      {...cartItem}
      cart={value.cart}
      removeFromCart={value.removeFromCart}
      incrementItem={value.incrementItem}
      decrementItem={value.decrementItem}
      matchesMediaQuery={value.matchesMediaQuery}/>
  }): <tr><td><h1>The cart is empty</h1></td></tr>
}


      </tbody>
    </table>
</div>
    </>

  )
}

export default CartItems
