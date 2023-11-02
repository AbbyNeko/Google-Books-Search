const router = require("express").Router();
const bookRoutes = require("./books");
const searchBookRoutes = require("./searchBooks");

// Book routes
router.use("/books", bookRoutes);
router.use("/searchBooks", searchBookRoutes);


module.exports = router;
