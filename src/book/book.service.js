const DATABASE = require("../database");

exports.Books = () => {
  const query = "SELECT * FROM book";
  return DATABASE.any(query);
};

exports.Book = (id) => {
  const query = "SELECT * FROM book WHERE id_book = $1";
  return DATABASE.one(query, [id]);
};

exports.CreateBook = (author, title, description) => {
  return DATABASE.func("create_book", [author, title, description]);
};

exports.UpdateBook = (id, author, title, description) => {
  return DATABASE.func("update_book", [id, author, title, description]);
};

exports.DeleteBook = (id) => {
  const query = `DELETE FROM book WHERE id_book = ${id}`;
  return DATABASE.none(query);
};
