import { useState } from 'react'
import HomePage from './components/pages/homepage/homepage.component'
import { Routes, Route } from 'react-router-dom'
import CategoryPage from './components/pages/categoryPage/categoryPage.component'
import data from './components/pages/categoryPage/utils.data'
import NavBar from '../src/components/NavBar/NavBar.components'

function App() {
  

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path="/shop/:category" element={<CategoryPage  categories = {data}/>}/>
    </Routes>
      

    </>
  )
}

export default App
