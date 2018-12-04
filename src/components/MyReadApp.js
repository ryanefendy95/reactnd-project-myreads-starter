import React, { Component } from 'react';
import * as BooksAPI from '../api/BooksAPI';
import '../App.css';
import Bookshelf from './Bookshelf';
import Search from './Seach';
import Error from './Error';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class MyReadApp extends Component {
  state = {
    shelves: [
      { type: 'currentlyReading', title: 'Currently Reading' },
      { type: 'wantToRead', title: 'Want to Read' },
      { type: 'read', title: 'Read' }
    ],
    books: [],
    searchedBooks: []
  };

  componentDidMount() {
    // get books on load
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  updateShelf = (bookToBeUpdated, newShelf) => {
    BooksAPI.update(bookToBeUpdated, newShelf).then(() => {
      bookToBeUpdated.shelf = newShelf;
      this.setState(prevState => ({
        books: [
          ...prevState.books.filter(book => book.id !== bookToBeUpdated.id),
          bookToBeUpdated
        ],
        searchedBooks: prevState.searchedBooks.filter(
          book => book.id !== bookToBeUpdated.id
        )
      }));
    });
  };

  searchBooks = query => {
    if (query) {
      BooksAPI.search(query.trim())
        .then(searchedBooks => {
          searchedBooks.forEach(searchedBook => {
            this.state.books.forEach(book => {
              if (searchedBook.id === book.id) {
                searchedBook.shelf = book.shelf;
              }
            });
          });
          this.setState({ searchedBooks });
        })
        .catch(() => {
          this.setState({ searchedBooks: [] });
        });
    } else {
      this.setState({ searchedBooks: [] });
    }
  };

  cleanUpSearch = () => {
    this.setState({ searchedBooks: [] });
  };

  render() {
    const { shelves, books, searchedBooks } = this.state;
    return (
      <BrowserRouter>
        <Switch className="app">
          <Route
            path="/"
            exact
            render={() => (
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
                  <Link to="/search">Add a book</Link>
                </div>
              </div>
            )}
          />
          <Route
            path="/search"
            render={() => (
              <Search
                books={searchedBooks}
                onSearch={this.searchBooks}
                onUpdateShelf={this.updateShelf}
                onCleanUp={this.cleanUpSearch}
              />
            )}
          />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default MyReadApp;
