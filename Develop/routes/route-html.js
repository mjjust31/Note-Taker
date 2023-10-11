const router = require("express").Router();
const path = require("path");

// // GET Route for homepage
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

// // GET Route for feedback page
// app.get('/feedback', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
// );

//routes for the app (24)

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router; 