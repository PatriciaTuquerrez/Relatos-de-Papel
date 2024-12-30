import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./views/HomePage";
import BookPage from "./views/BookPage";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import NotFound from "./components/NotFound";
import LandingPage from "./views/LandingPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Redirigir automáticamente desde "/" a "/home" */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Rutas principales */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/books/:id" element={<BookPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
