const mongoose = require("mongoose");

function connectWithDb() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connection with db successfull !"))
    .catch((err) => console.log(err));
}

module.exports = {connectWithDb};
