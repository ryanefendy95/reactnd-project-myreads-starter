import React, { Component } from 'react';
import Book from './Book';

class Search extends Component {
  state = {
    query: ''
  };

  onInputChange = ({ target: { value } }) => {
    this.setState({ query: value });
    this.props.onSearch(value);
  };

  render() {
    const { toggleSearch, books, onUpdateShelf } = this.props;
    const { query } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={toggleSearch}>
            Close
          </a>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={e => this.onInputChange(e)}
              value={query}
            />
          </div>
        </div>
        <div className="search-books-results">
          {books && books.length > 0 ? (
            <ol className="books-grid">
              {books.map(book => (
                <li key={book.id}>
                  <Book book={book} onUpdateShelf={onUpdateShelf} />
                </li>
              ))}
            </ol>
          ) : (
            <h3>Search did not return any books. Please try again!</h3>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
