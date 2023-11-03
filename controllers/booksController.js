const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(400).json({"error_message": err.message}));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(400).json({"error_message": err.message}));
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(400).json({"error_message": err.message}));
  },
  remove: function(req, res) {
    db.Book
      .deleteOne({
        _id: req.params.id
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(400).json({"error_message": err.message}));
  }
};
