import React,{createContext,useState,useEffect} from 'react'
import {allProducts} from './allProducts'


export const ContextProduct = createContext("")

export const ContextProductProvider=(props)=>{
const [allProductsData,setAllProductsData]=useState(allProducts)
const [cart,setCart]=useState("")


/***************ADD TO CART BUTTON***************/
const addToCartBtn = (e) => {
  e.preventDefault();
  const currentProduct = e.target.getAttribute("data-index");
  const filteredProductInfo = allProductsData.filter(
    (all) => all.id === parseInt(currentProduct)
  );


  filteredProductInfo.map((all) => {
    return all.inCart === false ? (all.inCart = true) : all;
  });

  setCart([...cart, filteredProductInfo[0]]);

  let products = [];
    if(localStorage.getItem('cart')){
        products = JSON.parse(localStorage.getItem('cart'));
    }
    products.push(filteredProductInfo[0]);
    localStorage.setItem('cart', JSON.stringify(products));

  localStorage.setItem('allItems', JSON.stringify(allProductsData));
}


/****************SHOW ITEMS IN CART WHEN USER REFRESH PAGE**************/
useEffect(()=>{
const addCartFromLocalStorage=localStorage.getItem('cart')
const allItemsFromLocalStorage=localStorage.getItem('allItems')
const counterContlorsLocalStorage=localStorage.getItem('counterContorls')
if(addCartFromLocalStorage){
  setCart(JSON.parse(addCartFromLocalStorage))
}
if(allItemsFromLocalStorage){
  setAllProductsData(JSON.parse(allItemsFromLocalStorage))
}


},[])

/******************REMOVE ITEM FROM CART BUTTON***************/
const removeFromCart=(e)=>{
  e.preventDefault()
const currentItem=e.target.getAttribute('data-index')
const filteredRemoved=cart.filter(all=>all.id!=parseInt(currentItem))

const allProductsSetCart=allProductsData.map((all)=>{
  return all.inCart===true?all.inCart=false:all
})

allProductsData.map((all)=>{
  return all.id===parseInt(currentItem)?all.count=1:all
})

setCart(filteredRemoved)
  localStorage.setItem('cart', JSON.stringify(filteredRemoved));
  localStorage.setItem('allItems',JSON.stringify(allProductsData))
}

/********************INCREMENT ITEM IN CART BUTTON******************/
  const [counterContorl,setCounterControl]=useState(1)
const incrementItem =(e)=>{

  e.preventDefault()
setCounterControl(counterContorl+1)
const currentElement=e.target.getAttribute('data-index')
const counterProduct=cart.filter(all=>all.id===parseInt(currentElement))

cart.map((all)=>{
  return all.id===parseInt(currentElement)&&all.count++
})
localStorage.setItem('allItems', JSON.stringify(allProductsData));
localStorage.setItem('cart', JSON.stringify(cart));

}



/********************DECREMENT ITEM IN CART BUTTON******************/
const decrementItem=(e)=>{
  e.preventDefault()
  setCounterControl(counterContorl-1)
const currentItem=e.target.getAttribute('data-index')
console.log(currentItem);
cart.map((all)=>{
  return all.id===parseInt(currentItem)&&all.count--
})
localStorage.setItem('allItems',JSON.stringify(allProductsData))
localStorage.setItem('cart',JSON.stringify(cart))
}


/*************CLICK ON NAVBAR FILTERED PRODUCT (ALL and FEATUREDS)**************/
const [productLink,setProductLink]=useState("/products")
const [currentFilter,setCurrentFilter]=useState("all")
const filterClickedProducts=(e)=>{
const current=e.target.getAttribute('data-index')
setCurrentFilter(current)
mobileNavClick()
}


/******Mobile nav button click*****/
const [clickedMobileMenu,setClickedMobileMenu]=useState(false)

const mobileNavClick=()=>{
setClickedMobileMenu(!clickedMobileMenu)
}

/***************MEDIA QUERY*******************/
const [matchesMediaQuery, setMatchesMediaQuery] = useState("");

useEffect(() => {
  function handleResize() {
    setMatchesMediaQuery(window.matchMedia("(min-width: 768px)").matches);
  }
  window.addEventListener("resize", handleResize);
}, [matchesMediaQuery]);


  return(
    <>
    <ContextProduct.Provider value={{
      allProductsData,
      addToCartBtn,
      cart,
      removeFromCart,
      incrementItem,
      decrementItem,
      filterClickedProducts,
      productLink,
      currentFilter,
      clickedMobileMenu,
      mobileNavClick,
      matchesMediaQuery

    }}>
    {props.children}
    </ContextProduct.Provider>
    </>
  )
}
