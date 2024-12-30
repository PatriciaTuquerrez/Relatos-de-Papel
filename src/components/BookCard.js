import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Importar el contexto del carrito
import { FaBook } from "react-icons/fa"; // Importar el icono de libro

const BookCard = ({ id, title, author, price }) => {
  const { addToCart } = useCart(); // Obtener la función para añadir al carrito

  return (
    <div className="card">
      <div className="book-icon">
        <FaBook size={80} /> {/* Icono de libro */}
      </div>
      <div className="book-info">
        <h3>{title}</h3>
        <p>Autor: {author}</p>
        <p>Precio: ${price.toFixed(2)}</p>
        <div>
          <button onClick={() => addToCart({ id, title, author, price })}>Añadir al carrito</button>
          <Link to={`/books/${id}`}>
            <button>Ver detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
