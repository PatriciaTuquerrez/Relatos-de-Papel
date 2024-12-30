import React from "react";
import { useCart } from "../context/CartContext"; 
import { useNavigate } from "react-router-dom"; 

const Checkout = () => {
  const { cart, clearCart } = useCart(); 
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    alert("¡Compra realizada con éxito!");
    clearCart(); 
    navigate("/home");
  };

  if (cart.length === 0) {
    return <p>El carrito está vacío.</p>;
  }

  return (
    <div className="checkout">
      <h2>Resumen de Compra</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <strong>{item.title}</strong> - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p><strong>Total:</strong> ${total.toFixed(2)}</p>
      <button onClick={handleCheckout}>Finalizar Compra</button>
    </div>
  );
};

export default Checkout;
