import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; 
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const { cart } = useCart(); 

  return (
    <header className="header">
      <nav className="navbar">
        <h1>Librería Relatos de Papel</h1>
        <ul className="nav-links">
          <li>
            <Link to="/home">Inicio</Link>
          </li>
          <li className="cart-container">
            <Link to="/cart" className="cart-icon">
              <FaShoppingCart size={20} />
              {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
