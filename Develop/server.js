//set up express

const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const uuid = require("./helpers/uuid");
const noteData = JSON.parse(fs.readFileSync("./db/db.json"));


const PORT = process.env.port || 3001;

//set up your middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



//setup routes using CRUD

app.get("/notes", function (req, res) {
  fs.readFile("./public/notes.html", "utf-8", (error, htmlPage) => {
    if (error) {
      res.status(404).json({ message: "Internal error for reading the file" });
    } else {
      res.send(htmlPage);
      console.log("it worked");
    }
  });
});

app.get("/api/notes", (req, res) => {
  return res.json(noteData);
});

app.post("/api/notes", (req, res) => {
  console.info(`${req.method} received`);

  const { title, text } = req.body;
  if (title && text) {
    const newNote = {
      title: title,
      text: text,
      note_id: uuid(),
    };

    noteData.push(newNote);
    const stringNoteData = JSON.stringify(noteData);

    const response = {
      status: "success",
      body: newNote,
    };

    fs.writeFile("./db/db.json", stringNoteData, (err) => {
      res.status(201).json(response);
    });
  }
});

// DELETE /api/notes/:id

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
