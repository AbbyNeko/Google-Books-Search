import React, { useState, useRef } from "react"
import API from "../utils/API";
import BookResult from "./BookResult";

function SearchBooks() {
  // Setting our component's initial state
  const [bookResults, setResults] = useState([])

  const searchKeyword = useRef();

  // search job postings
  function searchBooks(keyword) {
    API.searchBooks(keyword)
      .then(res => setResults(res))
      .catch(err => console.log(err));
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit() {
      searchBooks(searchKeyword.current.value);
  }

    return (
        <div class="container">

            <div class="row">
              <h1>Search Google Books</h1>

              <form onSubmit={() => handleFormSubmit()}>

                  <input 
                    type="text"
                    placeholder="Search book title, author, etc."
                    ref={searchKeyword}
                  />
                  <input type="submit" class="btn" value="Search Books"/>

              </form>

              <div className="results">

                {bookResults.map(result => 
                  <BookResult bookData={result}/>
                )}

              </div>
                
            </div>

        </div>
    );
  }


export default SearchBooks;
