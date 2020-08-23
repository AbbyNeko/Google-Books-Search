import React, { useState, useRef } from "react"
import API from "../utils/API";
import { Link } from "react-router-dom";

function SearchBooks() {
  // Setting our component's initial state
  const [bookResults, setResults] = useState([])
  const [formObject, setFormObject] = useState({})

  const searchKeyword = useRef();

  // search job postings
  function searchBooks(keyword) {
    API.searchBooks(keyword)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
      event.preventDefault();
      searchBooks(searchKeyword.current.value);
  }

    return (
        <div class="container">

            <div class="row">
              <h1>Search Google Books</h1>

              <form onSubmit={() => handleFormSubmit(event)}>

                  <input 
                    type="text"
                    placeholder="Search book title, author, etc."
                    ref={searchKeyword}
                  />
                  <input type="submit" class="btn" value="Search Books"/>

              </form>
                
            </div>

        </div>
    );
  }


export default Books;
