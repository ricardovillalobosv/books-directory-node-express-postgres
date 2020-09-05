const BooksServices = require("./book.service");

exports.Books = (req, res) => {
  let limit = req.query.limit;
  BooksServices.Books(limit)
    .then((books) => {
      res.json({
        success: true,
        data: books,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message: error,
      });
    });
};

exports.Book = (req, res) => {
  const idBook = req.params.idBook;
  BooksServices.Book(idBook)
    .then((book) => {
      res.json({
        success: true,
        data: book,
      });
    })
    .catch((error) => {
      res.status(404).json({
        success: false,
        error,
        message: "Book not found",
      });
    });
};

exports.GetLatestBook = (req, res) => {
  BooksServices.GetLatestBook()
    .then((book) => {
      res.json({
        success: true,
        data: book,
      });
    })
    .catch((error) => {
      res.status(404).json({
        success: false,
        error,
        message: "Book not found",
      });
    });
};

exports.CreateBook = (req, res) => {
  const author = req.body.author;
  const title = req.body.title;
  const description = req.body.description;

  BooksServices.CreateBook(author, title, description)
    .then(() => {
      res.json({
        success: true,
        message: "Successfully created book",
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        error,
        message: "Unsuccessfully created book",
      });
    });
};

exports.UpdateBook = (req, res) => {
  const idBook = req.body.idBook;
  const author = req.body.author;
  const title = req.body.title;
  const description = req.body.description;

  BooksServices.UpdateBook(idBook, author, title, description)
    .then(() => {
      res.json({
        success: true,
        message: "Successfully updated book",
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        error,
        message: "Unsuccessfully updated book",
      });
    });
};

exports.DeleteBook = (req, res) => {
  const idBook = req.params.idBook;

  BooksServices.DeleteBook(idBook)
    .then(() => {
      res.json({
        success: true,
        message: "Successfully deleted book",
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        error,
        message: "Unsuccessfully deleted book",
      });
    });
};
