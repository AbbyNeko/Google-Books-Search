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

  const savedBooksList = books.map(book => 
    <li>{book.title} <a class="view-btn" href={book.link}>View</a> <button className="delete-btn" onClick={() => deleteBook(book._id)}>Delete</button></li>
  );

    return (
        <div class="container">
            <div class="row">
                <h1 className="title">Saved Books</h1>
                <ul>
                    {savedBooksList}
                </ul>
            </div>
        </div>
    );
  }


export default SavedBooks;
