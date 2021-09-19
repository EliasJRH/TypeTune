const express = require('express')
const fs = require('fs-extra')
const formidable = require('formidable')
const spawn = require("child_process").spawn;
const session = require('express-session');
const { v4: uuidv4 } = require('uuid');
const httpStatus = require('http-status');

const app = express()
const cors = require('cors')
const port = 4000

app.use(cors())

app.get("/", (req, res) => {
  res.send({ exampleMessage: "React client connected to the Express server!"})
})

app.get('/home', (req, res) => {
  res.sendFile('home.html', {root: __dirname })
})

app.post('/uploadaudio', (req, res) =>{

  let form = new formidable.IncomingForm();
  form.uploadDir = "./music";
  form.keepExtensions = true;

  let filename;
  let uuid = uuidv4();

  form.parse(req, function(err, fields, files) {

      filename = './' + uuid +'/' +files.filetoupload.name

      //Rename the file to its original name (file renamed by formidable)
      fs.rename(files.filetoupload.path, filename, function(err) {
      if (err)
          throw err;
      });
  });
  
  let process = spawn('python3', ["./music.py", filename, 0] );

  process.stdout.on('data', function(data) {
    res.end(data.toString());
  } )  
  
});

app.get('/downloadaudio/:uuid/:title', (req, res) =>{
  res.writeHead(httpStatus.CREATED, {
    "Content-Disposition": `attachment; filename="${req.params.uuid + "-" + req.params.title}"`,
    "Content-Type": "audio/wav"
  })
  res.end()

})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
