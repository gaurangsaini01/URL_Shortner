const express = require("express");
require("dotenv").config();
const app = express();
const { connectWithDb } = require("./config/database.js");
const router = require("./Routes/router.js");
app.use(express.json());

//for working with x-www-form-urlencoded content type
app.use(express.json(), express.urlencoded({ extended: false }));

app.use(router);

//connection to DB
connectWithDb();

app.get("/", (req, res) => {
  return res.send("<h1>Hello World from Server !</h1>");
});

app.listen(4000, () => console.log("App Started on 4000"));
