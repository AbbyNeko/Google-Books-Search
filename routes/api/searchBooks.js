const router = require("express").Router();
const axios = require("axios");

// Matches with "/searchBooks/:keywords"
router.route("/:keywords")
  .get(getGoogleBooks(req, res, next))


//searching for books based on keyword using Google books API
function getGoogleBooks(req, res, next) {

    axios.get("https://www.googleapis.com/books/v1/volumes?key=AIzaSyCmflHA1PwIhruMdmS8O8KE4C3VqkNIk8s&q="+req.params.keywords)
        .then((response) => {
            res.json(response);
        })
        .catch(error => {
            console.log(error);
        });

}

module.exports = router;
