const express = require("express");
const cors = require("cors");
const app = express();

const routes = require("./routes");

app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

routes.init(app);

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
