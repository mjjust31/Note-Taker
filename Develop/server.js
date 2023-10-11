//set up express

const express = require('express')
const app = express()


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/goodbye', (req,res)=>{
//   res.send("goodbye")
// })



const PORT = process.env.port || 3001;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})