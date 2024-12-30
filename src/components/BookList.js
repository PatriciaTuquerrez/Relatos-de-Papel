import React, { useState } from "react";
import { useBooks } from "../hooks/useBooks";
import BookCard from "./BookCard";

const BookList = () => {
  const { books, loading } = useBooks();
  const [searchTerm, setSearchTerm] = useState(""); 

  if (loading) {
    return <p>Cargando libros...</p>;
  }

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar libro por nombre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="book-container">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              price={book.price}
            />
          ))
        ) : (
          <p>No se encontraron libros que coincidan con "{searchTerm}".</p>
        )}
      </div>
    </div>
  );
};

export default BookList;
