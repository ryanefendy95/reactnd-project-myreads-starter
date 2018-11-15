import React, { Component } from 'react';
import * as BooksAPI from '../api/BooksAPI';
import '../App.css';
import Bookshelf from './Bookshelf';
import Search from './Seach';

class MyReadApp extends Component {
  state = {
    showSearchPage: false,
    shelves: [
      { type: 'currentlyReading', title: 'Currently Reading' },
      { type: 'wantToRead', title: 'Want to Read' },
      { type: 'read', title: 'Read' }
    ],
    books: [],
    searchedBooks: []
  };

  updateShelf = (bookToBeUpdated, newShelf) => {
    bookToBeUpdated.shelf = newShelf;
    this.setState(prevState => ({
      books: [...prevState.books, bookToBeUpdated],
      searchedBooks: prevState.searchedBooks.filter(
        book => book.id !== bookToBeUpdated.id
      )
    }));
  };

  searchBooks = query => {
    if (query) {
      BooksAPI.search(query.trim()).then(books =>
        this.setState({ searchedBooks: books })
      );
    }
  };

  render() {
    const { shelves, books, searchedBooks } = this.state;
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search
            toggleSearch={() => this.setState({ showSearchPage: false })}
            books={searchedBooks}
            onSearch={this.searchBooks}
            onUpdateShelf={this.updateShelf}
          />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {shelves.map(shelve => {
                  const shelfBooks = books.filter(
                    book => book.shelf === shelve.type
                  );
                  return (
                    <Bookshelf
                      title={shelve.title}
                      books={shelfBooks}
                      key={shelve.title}
                      onUpdateShelf={this.updateShelf}
                    />
                  );
                })}
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default MyReadApp;
