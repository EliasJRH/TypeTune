const express = require('express')
const fs = require('fs-extra')
const formidable = require('formidable')
const spawn = require("child_process").spawn;
const session = require('express-session');
const { v4: uuidv4 } = require('uuid');
const httpStatus = require('http-status');
const { dirname } = require('path');

const app = express()
const cors = require('cors')
const port = 4000

// app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.sendFile('home.html', {root: __dirname })
})

app.post('/uploadaudio', (req, res) =>{

  let form = new formidable.IncomingForm();
  form.uploadDir = "./music";
  form.keepExtensions = true;

  let filename;
  // let uuid = uuidv4();
  let uuid = "6"

  form.parse(req, function(err, fields, files) {

      filename = './music/' + files.filetoupload.name

      //Rename the file to its original name (file renamed by formidable)
      fs.rename(files.filetoupload.path, filename, function(err) {
      if (err)
          throw err;
      });

  });

  // let process = spawn('python3', ["./music.py", filename, 0] );

  // process.stdout.on('data', function(data) {
  //   res.redirect('/pickinstrument/6');
  // } )
  
  console.log('done')

  res.redirect(`/getsep/${filename}`)

});

app.get('/getsep/:filename', (req,res) =>{
  res.render("loading.html")
  let process = spawn('python3', ["./music.py", req.params.filename, 0] );

  process.stdout.on('close', function(data) {
    res.redirect('/pickinstrument/:uuid')
  } )

})

app.get('/pickinstrument/:uuid', (req, res) =>{
  res.sendFile('home2.html', {root: __dirname })
})

app.get('/downloadaudio/:uuid/:title', (req, res) =>{
  res.download(`${__dirname}/${req.params.uuid}/audio/${req.params.title}.wav`)
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
