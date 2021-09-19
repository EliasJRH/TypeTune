const express = require('express')
const fs = require('fs-extra')
const formidable = require('formidable')
const spawn = require("child_process").spawn;
const session = require('express-session');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('home.html', {root: __dirname })
})

app.post('/uploadaudio', (req, res) =>{

  let form = new formidable.IncomingForm();
  form.uploadDir = "./music";
  form.keepExtensions = true;

  let filename;

  form.parse(req, function(err, fields, files) {

      filename = './music/'+files.filetoupload.name

      //Rename the file to its original name (file renamed by formidable)
      fs.rename(files.filetoupload.path, './music/'+files.filetoupload.name, function(err) {
      if (err)
          throw err;
      });
  });
  
  let process = spawn('python3', ["./music.py", filename, 0] );

  process.stdout.on('data', function(data) {
    res.send(data.toString());
  } )  
  
  console.log("done")
  
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
