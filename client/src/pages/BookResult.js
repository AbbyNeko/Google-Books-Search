import React from "react"
import API from "../utils/API";

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function saveBook(bookData) {
    if (bookData.title && bookData.author) {
      API.saveBook({
        title: bookData.title,
        author: bookData.author,
        synopsis: bookData.description
      })
        .then(res => console.log('saved'))
        .catch(err => console.log(err));
    }
  };

function BookResults({bookData}) {

    return (
            <div className="result">
                <img href={bookData.image} alt={bookData.title}/>
                <h1><a href={bookData.link}>{bookData.title}</a></h1>
                <h3>Author: {bookData.author}</h3>
                <p>{bookData.description}</p>
                <button onClick={() => saveBook(bookData)}>Save Book</button>
            </div>
    );
  }


export default BookResults;
