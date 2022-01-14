import React from 'react'
import PropTypes from 'prop-types'

const CartItem = ({productName,price,img,removeFromCart,id,count,incrementItem,cuantityProduct,decrementItem,matchesMediaQuery}) => {


  return (
<>
<tr data-index={id}>
  <td>
    {
      img&&    <img
            src={img}
            alt=""
          />
    }
    {
      img.length>=0&&    <img
            src={img[0]}
            alt=""
          />
    }
  </td>
  <td>{productName}</td>
  <td>${price}</td>
  <td>
    <button onClick={removeFromCart}
      data-index={id}>
      {matchesMediaQuery?"Remove":<i onClick={removeFromCart} data-index={id} class="far fa-trash-alt"></i>}
    </button>

   <button onClick={incrementItem}
       data-index={id}>
       +
     </button>
       <span>{count}</span>
     <button onClick={decrementItem} data-index={id} disabled={count===1}>-</button>
  </td>
</tr>
<tr class="spacer"><td></td></tr>
</>
  )
}

export default CartItem
