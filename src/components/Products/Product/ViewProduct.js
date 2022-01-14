import React,{useContext} from 'react'
import PropTypes from 'prop-types'
import {ContextProduct} from '../../ContextProductsApp.js'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'

const ViewProduct = (props) => {
  const value=useContext(ContextProduct)

const idProduct=useParams()

  return (
    <>
<div className="viewProduct">
{
  value.allProductsData.filter(all=>all.id===parseInt(idProduct.id)).map((all)=>{
    return <article data-index={all.id} key={all.id}>
      <h1>{all.productName}</h1>
    <h3>{all.info}</h3>
  {
    all.img&&  <img src={'.'+all.img} alt=""/>
  }

  {
    all.img[0]&&  <img src={'.'+all.img[0]} alt=""/>
  }

    <h2>${all.price}</h2>
  <p>{all.allInfo}</p>

      <div className="butons">
      <div className="viewProductButtons">
      <button class="addToCartBtn" disabled={all.inCart===true} onClick={value.addToCartBtn} data-index={all.id}>{all.inCart===true?"Added":"Add to cart"}<span><i class="fas fa-shopping-cart"></i></span></button>
    <Link class="addToCartBtn" to='/products'>Back</Link>
      </div>
      </div>
        </article>
  })
}
</div>
    </>
  )
}

export default ViewProduct
