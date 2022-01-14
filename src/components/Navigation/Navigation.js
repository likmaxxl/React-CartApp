import React,{useContext,useState} from 'react'
import {Link} from 'react-router-dom'
import {ContextProduct} from '../ContextProductsApp'

const Navigation = (props) => {
  const value=useContext(ContextProduct)



  return (
<>


<div id="navigation">
  <div id="nav-icon" onClick={value.mobileNavClick} class={value.clickedMobileMenu?"open":""}>
  <span className="line"></span>
<span className="line"></span>
  <span className="line"></span>
</div>

<ul class={value.clickedMobileMenu?"":"hide-show-navBar"}>
  <li>
    <Link to="/" onClick={value.mobileNavClick}>
          Home
    </Link>

  </li>
  <li>
    <Link to={value.productLink} data-index="all" onClick={value.filterClickedProducts}>
    Products
      </Link>
  </li>

  <li>
      <Link to={value.productLink} data-index="featured" onClick={value.filterClickedProducts}>
    Featured Products
      </Link>
  </li>
</ul>
<ul className="cart-cart">
  <li >
    <Link className="cartItems" to="/Cart">
    <span className="icon"><i className="fas fa-shopping-cart"></i></span>
{
  value.cart?<span className="cartLength">{value.cart.length}</span>:""
}

</Link>
  </li>
</ul>
</div>
</>
  )
}

export default Navigation
