import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductList } from './pages/productList'; // Only import once with correct casing
import { Cart } from './pages/Cart';
import { Navbar } from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
