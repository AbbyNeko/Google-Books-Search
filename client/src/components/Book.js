import React, { useState, useEffect } from "react"
import API from "../utils/API";
import { Link } from "react-router-dom";

const [formObject, setFormObject] = useState({})

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  };

function Book(bookData) {

    return (
        <div class="container">
            <div class="row">
                <h1><a href={bookData.link}>{bookData.title}</a></h1>
                <h3>Author: {bookData.author}</h3>
                <img href={bookData.image} alt={bookData.title}/>
                <p>{bookData.description}</p>
            </div>
        </div>
    );
  }


export default Books;
