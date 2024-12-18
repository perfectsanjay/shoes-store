import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.components';
import data from './components/pages/categoryPage/utils.data';

const HomePage = lazy(() => import('./components/pages/HomePage/HomePage.component'));
const CategoryPage = lazy(() => import('./components/pages/categoryPage/categoryPage.component'));
const ProductPage = lazy(() => import('./components/pages/ProductPage/ProductPage.component'));
const CartPage = lazy(() => import('./components/pages/cartPage/cartPage.component'));
const SignInAndSignUpPage = lazy(() => import('./components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/:category" element={<CategoryPage categories={data} />} />
          <Route path="/shop/product/:id" element={<ProductPage products={data} />} />
          <Route path="/shop/cart" element={<CartPage />} />
          <Route path="/signin" element={<SignInAndSignUpPage />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

