import React from 'react';
import BookShelfChanger from './BookShelfChanger';

const Book = props => {
  const { book, onUpdateShelf } = props;
  const bgImg =
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : '';
  const title = book.title ? book.title : 'No title available';
  const styles = {
    width: 128,
    height: 188,
    backgroundImage: `url(${bgImg})`
  };

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={styles} />
        <BookShelfChanger onUpdateShelf={onUpdateShelf} book={book} />
      </div>
      <div className="book-title">{title}</div>
      {book.authors &&
        book.authors.length &&
        book.authors.map(author => (
          <div className="book-authors" key={author}>
            {author}
          </div>
        ))}
    </div>
  );
};

export default Book;
