import React,{useContext} from 'react'
import PropTypes from 'prop-types'
import SingleProduct from './SingleProduct'
import {ContextProduct} from '../../ContextProductsApp'

const ShowAllProducts = (props) => {

  const value=useContext(ContextProduct)
  // console.log(value.addTocartClick)
  return (
  <>
  <div className="allProducts">
{
value.currentFilter==='all'&&
  value.allProductsData.map((allProductsMap)=>{
    return <SingleProduct key={allProductsMap.id}
      {...allProductsMap}
      viewProductClick={value.viewProductClick}
      addToCartBtn={value.addToCartBtn}
      cart={value.cart}/>
  })
}
{
value.currentFilter==='featured'&&
  value.allProductsData.filter(all=>all.featured===true).map((allProductsMap)=>{
    return <SingleProduct key={allProductsMap.id}
      {...allProductsMap}
      viewProductClick={value.viewProductClick}
      addToCartBtn={value.addToCartBtn}
      cart={value.cart}/>
  })
}

</div>
  </>
  )
}

export default ShowAllProducts
