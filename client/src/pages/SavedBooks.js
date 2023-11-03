import React, { useState, useEffect } from "react"
import API from "../utils/API";

function SavedBooks() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  const savedBooksList = books.map((book, index) => 
    <li key={index}>
        <a className="view-btn" href={book.link} target="_blank" rel="noopener noreferrer">
        {book.title}
        </a> 
      <span className="column-align">
        <button className="delete-btn btn btn-danger" onClick={() => deleteBook(book._id)}>Delete</button>
      </span>
    </li>
  );

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="title">Saved Books</h1>
                </div>

                <div className="col-12 saved-books-list">
                    <ul>
                        {savedBooksList}
                    </ul>
                </div>
            </div>
        </div>
    );
  }


export default SavedBooks;
