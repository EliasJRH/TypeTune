const express = require('express')
const fs = require('fs-extra')
const formidable = require('formidable')
// const {spawn} = require('child_process')
const session = require('express-session')
const pug = require('pug')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('home.html', {root: __dirname })
})

app.post('/song', (req, res) =>{  
  
  var form = new formidable.IncomingForm();
  console.log(form);
  //Formidable uploads to operating systems tmp dir by default
  form.uploadDir = "./music";       //set upload directory
  form.keepExtensions = true;     //keep file extension

  console.log(form.files)
  
  form.parse(req, function(err, fields, files) {

      //Formidable changes the name of the uploaded file
      //Rename the file to its original name
      fs.rename(files.filetoupload.path, './music/'+files.filetoupload.name, function(err) {
      if (err)
          throw err;
        console.log('renamed complete');  
      });
      res.send("iss done");
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
