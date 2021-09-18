const express = require('express')
const fs = require('fs')
const {spawn} = require('child_process')
const session = require('express-session')
const pug = require('pug')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('home.html', {root: __dirname })
})

app.post('/song', (req, res) =>{
  console.log(req)
  res.send("song sent").status(200);
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
