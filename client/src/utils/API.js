import axios from "axios";

const bookAPI = {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books/");
  },
  searchBooks: function(keywords) {
    return axios.get("/api/searchBooks/"+keywords);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
}
export default bookAPI;
