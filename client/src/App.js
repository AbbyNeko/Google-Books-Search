import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";

import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<SearchBooks />}>
          </Route>
          <Route exact path="/savedbooks" element={<SavedBooks />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
