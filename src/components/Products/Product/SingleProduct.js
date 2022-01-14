import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const SingleProduct = ({productName,id,info,price,img,viewProductClick,addToCartBtn,cart}) => {
  return (
<>
  <article data-index={id}>
<h1>{productName}</h1>
<h3>{info}</h3>

{
  img?<img src={img} alt=""/>:""
}
{
  img[0]?<img src={img[0]} alt=""/>:""
}

<h2>${price}</h2>
<div className="butons">
<div className="allItemsButtons">
<button class="addToCartBtn" disabled={cart&&cart.some(all=>all.id===parseInt(id))} onClick={addToCartBtn} data-index={id}>{cart&&cart.some(all=>all.id===parseInt(id))?"Added":'Add to cart'}<span><i class="fas fa-shopping-cart"></i></span> </button>
<Link class="addToCartBtn" to = {`/viewProduct/${id}`}>View</Link>
</div>
</div>
  </article>
</>
  )
}

export default SingleProduct
