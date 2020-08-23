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
      .then(res => setResults(res.data))
      .catch(err => console.log(err));
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {

      event.preventDefault();

      searchBooks(searchKeyword.current.value);
  }

  //console.log(`results - ${JSON.stringify(bookResults)}`);

  const listedResults = bookResults.map((result, index) => 
    <BookResult bookData={result.volumeInfo} key={index}/>
  );

    return (
        <div className="container">

            <div className="row">
              <h1 className="title">Search Google Books</h1>

              <form onSubmit={handleFormSubmit}>

                  <input 
                    className="search-bar"
                    type="text"
                    placeholder="Search book title, author, etc."
                    ref={searchKeyword}
                  />
                  <input type="submit" className="btn btn-primary" value="Search Books"/>

              </form>

              <div className="results">

                {listedResults}

              </div>
                
            </div>

        </div>
    );
  }


export default SearchBooks;
