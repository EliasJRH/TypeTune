const express = require('express')
const fs = require('fs')
// const {spawn} = require('child_process')
const session = require('express-session')
const pug = require('pug')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('home.html', {root: __dirname })
})

app.post('/song', (req, res) =>{

  let spawn = require("child_process").spawn;
  let process = spawn('python3',["./music.py"] );

  process.stdout.on('data', function(data) {
    res.send(data.toString());
  } )
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
