import HomePage from 'src/components/pages/homepage/HomePage.component.jsx'
import { Routes, Route } from 'react-router-dom'
import CategoryPage from './components/pages/categoryPage/categoryPage.component'
import data from './components/pages/categoryPage/utils.data'
import NavBar from '../src/components/NavBar/NavBar.components'
import ProductPage from './components/pages/ProductPage/ProductPage.component'
import CartPage from './components/pages/cartPage/cartPage.component'
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

function App() {
  

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path="/shop/:category" element={<CategoryPage  categories = {data}/>}/>
      <Route path="/shop/product/:id" element={<ProductPage products = {data} />}></Route>
      <Route path="/shop/cart" element={<CartPage/>}></Route>
      <Route path="/signin" element={<SignInAndSignUpPage/>}></Route>
    </Routes>
      

    </>
  )
}

export default App;
