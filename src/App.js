import { Typography } from '@mui/material';
import React from 'react';
import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductsItemPage } from './pages/ProductsItemPage';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { CartPage } from './pages/CartPage';


export function App() {
  return (
      <div className="app">
        <Header/>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/products' element={<ProductsPage/>} />
          <Route path='/products/:id' element={<ProductsItemPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/cart' element={<CartPage/>} />
        </Routes>
      </div>
  );
}
