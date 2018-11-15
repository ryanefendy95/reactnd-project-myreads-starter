import React from 'react';
import Book from './Book';

const Bookshelf = ({ title, books, onUpdateShelf }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.title}>
            <Book book={book} onUpdateShelf={onUpdateShelf} />
          </li>
        ))}
      </ol>
    </div>
  </div>
);

export default Bookshelf;
