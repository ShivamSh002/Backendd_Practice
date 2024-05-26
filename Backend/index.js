const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.routes");

const app = express();
app.use(express.json());

app.use("/user", userRoutes);

mongoose
  .connect("mongodb://localhost:27017/test1")
  .then(() => {
    console.log("connected to db");
    app.listen(3001, () => {
      console.log("hello");
    });
  })
  .catch((e) => {
    console.log(e);
  });
