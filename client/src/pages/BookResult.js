import React from "react"
import API from "../utils/API";

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function saveBook(bookData) {

    console.log(`book data - ${JSON.stringify(bookData)}`)

    API.saveBook({
        title: bookData.title,
        author: bookData.authors[0],
        synopsis: bookData.description,
        link: bookData.infoLink
      })
        .then(res => console.log('saved'))
        .catch(err => console.log(err));
        
  };

function BookResults({bookData}) {

  const authorsListed = bookData.authors.map((author, index) => { 
      if(index > 0) { 
          return ', '+author; 
      } else { 
          return author; 
      }
  });

    return (
            <div className="result row">

              <div className="book-img col-2">
                  <img src={bookData.imageLinks.smallThumbnail} alt={bookData.title}/>
              </div>

              <div className="book-info col-9">
                  <h1><a href={bookData.infoLink} target="_blank" rel="noopener noreferrer">{bookData.title}</a></h1>
                  <h3>Author: {authorsListed}</h3>
                  <p>{bookData.description}</p>
                  <button className="btn btn-primary" onClick={() => saveBook(bookData)}>Save Book</button>
              </div>
              
            </div>

    );
  }


export default BookResults;
