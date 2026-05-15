import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import Product from './pages/Product';
import LoginPage from './pages/LoginPage';
import Checkout from './pages/Checkout';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/footer';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Profile from './pages/Profile';
import Portfolio from './pages/Portfolio';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />

      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
