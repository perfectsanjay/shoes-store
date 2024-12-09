import { useState } from 'react'
import HomePage from './components/pages/homepage/homepage.component'
import { Routes, Route } from 'react-router-dom'
import CategoryPage from './components/pages/categoryPage/categoryPage.component'
import data from './components/pages/categoryPage/utils.data'
import NavBar from '../src/components/NavBar/NavBar.components'
import ProductPage from './components/pages/ProductPage/ProductPage.component'
import CartPage from './components/pages/cartPage/cartPage.component'

function App() {
  

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path="/shop/:category" element={<CategoryPage  categories = {data}/>}/>
      <Route path="/shop/product/:id" element={<ProductPage products = {data} />}></Route>
      <Route path="/shop/cart" element={<CartPage/>}></Route>
    </Routes>
      

    </>
  )
}

export default App
