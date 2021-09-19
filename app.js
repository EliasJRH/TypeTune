const express = require('express')
const fs = require('fs-extra')
const formidable = require('formidable')
const spawn = require("child_process").spawn;
const session = require('express-session');
const { v4: uuidv4 } = require('uuid');
const httpStatus = require('http-status');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

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
  
  console.log('done')

  res.redirect(`/getsep/${filename}`)

});


app.get('/getsep/:filename', (req,res) =>{
  uuid_dirr = uuidv4()
  let process = spawn('python3', ["./music.py", req.params.filename, 0, uuid_dirr] );

  process.stdout.on('close', function(data) {
    res.redirect(`/pickinstrument/:${uuid_dirr}`)
  } )

})

app.get('/pickinstrument/:uuid', (req, res) =>{
  res.redirect('instrumentPicked/:instrument')
});

app.get('/instrumentPicked/:instrument', (req, res) => {
  // let accessId = '<secret-code-here>';

  // let params = { blocking: false, format: 'json', access_id: accessId, input_file: 'http://www.sonicAPI.com/music/solo_sax.mp3', detailed_results: 'false'};

  // fetch('https://api.sonicAPI.com/analyze/melody', { method: 'get', header: "application/json", data: params})
  // .then((r) => {
  //   console.log(r)
  //   return r.json();
  // }).then((val)=>{
  //     let fileId = val.file.file_id;

  //     let polling = setInterval(pollProgress, 500);

  //     let pollProgress = ()=>{
  //       fetch('https://api.sonicAPI.com/file/status?file_id=' + fileId).then((data)=>{
  //         return data.json();
  //       }).then((value)=>{
  //         if(value.file.status == 'ready'){
  //           let downloadUrl = 'https://api.sonicAPI.com/file/download?file_id=' + fileId + '&access_id=' + accessId + '&format=json';
    
  //           fetch(downloadUrl)
  //             .then((info)=>{
  //               return info.json();
  //             }).then((val)=>{
  //               console.log(val);
  //               res.send(val);
  //             })
  //             clearInterval(polling);       
  //           }});   
  //         }
  // }).catch(err => console.log(err));
  res.sendFile('./public/samples/sample.json', {root: __dirname })
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
