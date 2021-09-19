const express = require('express')
const fs = require('fs-extra')
const formidable = require('formidable')
const spawn = require("child_process").spawn;
const session = require('express-session')
const pug = require('pug')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('home.html', {root: __dirname })
})

app.post('/song', (req, res) =>{

  let form = new formidable.IncomingForm();
  form.uploadDir = "./music";
  form.keepExtensions = true;

  console.log(form.files)
  
  form.parse(req, function(err, fields, files) {

      //Rename the file to its original name (file renamed by formidable)
      fs.rename(files.filetoupload.path, './music/'+files.filetoupload.name, function(err) {
      if (err)
          throw err;
      });
  });
  
  let process = spawn('python3', ["./music.py"] );

  process.stdout.on('data', function(data) {
    res.send(data.toString());
  } )  
  
  
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
