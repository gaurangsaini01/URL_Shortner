const express = require("express");
require("dotenv").config();
const path = require("path");
const app = express();
const { connectWithDb } = require("./config/database.js");
const router = require("./Routes/router.js");
const staticRouter = require("./Routes/staticRouter.js");
app.use(express.json());

//for working with x-www-form-urlencoded content type
app.use(express.json(), express.urlencoded({ extended: false }));

app.use(router);
app.use(staticRouter);

//telling express we are using ejs
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//connection to DB
connectWithDb();

app.listen(4000, () => console.log("App Started on 4000"));
