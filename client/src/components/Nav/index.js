import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <h1 className="navbar-brand">Reading List</h1>

      <ul className="navbar-nav mr-auto">

      <li className="nav-item">
      <a className="navbar-brand" href="/Google-Books-Search">
        Search Books
      </a>
      </li>

      <li className="nav-item">
      <a className="navbar-brand saved-books" href="/savedbooks"> 
        Saved Books
      </a>
      </li>

      </ul>


    </nav>
  );
}

export default Nav;
