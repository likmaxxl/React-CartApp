import React from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {ContextProductProvider} from './ContextProductsApp'
import Navigation from './Navigation/Navigation'
import Home from './Home/Home'
import ViewProduct from  './Products/Product/ViewProduct'
import ShowAllProducts from './Products/Product/ShowAllProducts'
import CartItems from './Cart/CartItems'
import FeaturedProducts from './Products/FeaturedsProduct/FeaturedProducts'


const ProductApp = (props) => {
  return (
<>
<ContextProductProvider>
<Router>
<Navigation/>
<Routes>
  <Route path="/" element={<Home />} />
<Route path="/products" element={<ShowAllProducts />} />
  <Route path="/viewProduct/:id" element={<ViewProduct />} />
  <Route path="/cart" element={<CartItems />} />
<Route path="/featured" element={<FeaturedProducts/>}/>
</Routes>;

</Router>
</ContextProductProvider>
</>
  )
}

export default ProductApp
