//set up express

const express = require("express");
const path = require('path');
const app = express();
const htmlRoute = require('./routes/route-html'); 
// const apiRoute = require('./routes/route-api');
const PORT = process.env.port || 3001;
// const dbTest = require('./db/db.json')
// app.use("/", (req, res) => {
//   res.send(`<h1> ${Date()} </h1> `)
// })

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(htmlRoute);
// app.use(apiRoute);


// '/api/notes'
// `/api/notes/${id}`,
// /notes'


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

