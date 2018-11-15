import React from 'react';
import BookShelfChanger from './BookShelfChanger';

const Book = props => {
  const { book, onUpdateShelf } = props;
  const styles = {
    width: 128,
    height: 188,
    backgroundImage: `url(${book.url})`
  };
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={styles} />
        <BookShelfChanger onUpdateShelf={onUpdateShelf} book={book} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

export default Book;
