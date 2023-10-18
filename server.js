//set up express

const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const uuid = require("./helpers/uuid");
const noteData = JSON.parse(fs.readFileSync("./db/db.json"));
//needed to parse it to be able to use javascript

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
});

const getNotes = (req, res) => {
  return res.json(noteData);
};

const postNotes = (req, res) => {
  console.info(`${req.method} received`);

  const { title, text } = req.body;
  if (title && text) {
    const newNote = {
      title: title,
      text: text,
      id: uuid(),
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
};

//get a single note based on generated id
// console.log(noteData[0].note_id)
const getNoteId = (req, res) => {
  const noteId = req.params.id;
  if (noteId) {
    for (let i = 0; i < noteData.length; i++) {
      const currentNote = noteData[i];
      if (currentNote.id === noteId) {
        return res.status(200).json({ id: currentNote.id });
      }
    }
    return res.status(404).send("Note not found");
  } else {
    return res.status(400).send("Note ID not provided");
  }
};

//DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete.
// In order to delete a note, you'll need to read all notes. X
// from the db.json file, remove the note with the given id property,
//and then rewrite the notes to the db.json file.

const deleteNote = (req, res) => {
  const noteId = req.params.id;
  if (noteId) {
    for (let i = 0; i < noteData.length; i++) {
      const currentNote = noteData[i];
      if (currentNote.id === noteId) {
        const updatedNotes = noteData.filter((note) => note.id !== noteId);
        const stringUpdatedNotes = JSON.stringify(updatedNotes);
        fs.writeFile("./db/db.json", stringUpdatedNotes, (err) => {
          if (err) {
            res.status(500).send("Error writing file.");
            return;
          }
          res.status(200).send("Note deleted successfully.");

        });
      }
    }
  }
};

// noteData.push(newNote);
// const stringNoteData = JSON.stringify(noteData);

// const response = {
//   status: "success",
//   body: newNote,
// };

// fs.writeFile("./db/db.json", stringNoteData, (err) => {
//   res.status(201).json(response);
// });

app.route("/api/notes").get(getNotes).post(postNotes);
app.route(`/api/notes/:id`).get(getNoteId).delete(deleteNote);

// DELETE /api/notes/:id

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

// console.log(noteData);
