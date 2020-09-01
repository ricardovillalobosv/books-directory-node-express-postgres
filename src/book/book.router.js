const express = require("express");
const router = express.Router();

const BookController = require("./book.controller");

router.route("/books").get(BookController.Books);
router.route("/books/:idBook").get(BookController.Book);
router.route("/books/latest-book").get(BookController.GetLatestBook);
router.route("/books").post(BookController.CreateBook);
router.route("/books").put(BookController.UpdateBook);
router.route("/books/:idBook").delete(BookController.DeleteBook);

module.exports = router;
