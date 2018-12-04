## MyReads

A bookshelf app, MyReads, that allows user to select and categorize books as you have read, are currently reading, or want to read. MyReads lets you manage your digital bookshelf. Supports three shelves Currently Reading, Read and Want to Read. Additionally you can search and add books to any shelf.

## Installation

Alternatively, feel free to use `npm` instead of `yarn`

```sh
$ git clone https://github.com/ryanefendy95/reactnd-project-myreads-starter.git
$ cd reactnd-project-myreads-starter
$ yarn install
$ yarn start # visit localhost:3000 🍰✨
```

## Usage

- To change a book's category or remove a book from the list, click on the green button on the book cover
- To add new books, click on the green + button at the bottom of the page. Enter an author's name or subject. Up to 20 items will be returned.

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains following methods to perform necessary operations on the backend:

- [`getAll`](#getall) To get all the books from the API
- [`update`](#update) Update shelf information of the book
- [`search`](#search) Search book in the database

### Screenshots

![Main Page](https://raw.githubusercontent.com/cubiio/reactnd-myreads/master/docs/myreads.png)

![Search Page](https://raw.githubusercontent.com/cubiio/reactnd-myreads/master/docs/search.png)
