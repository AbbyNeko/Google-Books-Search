const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();
no
//searching for books based on keyword using Google books API
function getGoogleBooks(req, res) {
    
    axios.get("https://www.googleapis.com/books/v1/volumes?key="+process.env.API_KEY+req.params.keywords)
        .then((response) => {
            res.json(response.data.items);
        })
        .catch(error => {
            console.log(`error - ${error}`);
        });

}

// Matches with "/searchBooks/:keywords"
router.route("/:keywords")
  .get(getGoogleBooks)


module.exports = router;
