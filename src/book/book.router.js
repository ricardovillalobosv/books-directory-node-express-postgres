const express = require("express");
const router = express.Router();

const BookController = require("./book.controller");

router.route("/books").get(BookController.Books);
router.route("/book/:id").get(BookController.Book);
router.route("/latest-book").get(BookController.GetLatestBook);
router.route("/create-book").post(BookController.CreateBook);
router.route("/update-book").put(BookController.UpdateBook);
router.route("/delete-book").delete(BookController.DeleteBook);

module.exports = router;
