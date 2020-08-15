const BookRouter = require("../book/book.router");

const init = (app) => {
  app.use(BookRouter);
};

module.exports = { init };
