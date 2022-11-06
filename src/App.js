import React from 'react';
import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { CatalogPage } from './pages/CatalogPage';
import { ProductsItemPage } from './pages/ProductsItemPage';
import { DeliveryPage } from './pages/DeliveryPage';
import { CartPage } from './pages/CartPage';
import { OrderPage } from './pages/OrderPage';
import { Page404 } from './pages/Page404';


export function App() {
  return (
      <div className="app">
        <Header/>
        <Routes>
          <Route path='/' element={<AboutPage/>} />
          <Route path='/catalog' element={<CatalogPage/>} />
          <Route path='/catalog/:id' element={<ProductsItemPage/>} />
          <Route path='/delivery' element={<DeliveryPage/>} />
          <Route path='/cart' element={<CartPage/>} />
          <Route path='/order' element={<OrderPage/>} />
          <Route path='*' element={<Page404/>} />
        </Routes>
      </div>
  );
}
