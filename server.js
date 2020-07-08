const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const app = express();

// Parse body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content from "public" directory
app.use(express.static("public"));

// Mongoose connection
mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
