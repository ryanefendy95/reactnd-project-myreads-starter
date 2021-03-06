import React from 'react';

const BookShelfChanger = ({ book, onUpdateShelf }) => (
  <div className="book-shelf-changer">
    <select
      onChange={event => onUpdateShelf(book, event.target.value)}
      value={book.shelf ? book.shelf : 'none'}
    >
      <option value="move" disabled>
        Move to...
      </option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>
);

export default BookShelfChanger;
