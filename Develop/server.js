//set up express

const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const uuid = require("./helpers/uuid");
const noteData = require("./db/db.json");

const PORT = process.env.port || 3001;

//set up your middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//setup routes using CRUD

app.get("/notes", function (req, res) {
  fs.readFile("./public/notes.html", "utf-8", (error, data) => {
    if (error) {
      res.status(404).json({ message: "Internal error for reading the file" });
    } else {
      res.send(data);
      console.log("it worked");
    }
  });

  // fs.readFile("./data.csv", "utf8", (error, data) => {
  //   if (error) {
  //     console.error(error);
  //   } else {
  //     console.table(data);
  //
});

app.use("/api/notes", (req, res) => {
  res.json(noteData);
  console.log("working");
});

// DELETE /api/notes/:id

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
