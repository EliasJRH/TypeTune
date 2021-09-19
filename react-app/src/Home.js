import React from 'react'
import './Home.scss';

let fileChange = ()=>{
    let fileName = document.getElementById("filetoupload").value;
    console.log(fileName)
    if(fileName)
      document.getElementById("uploadFile").innerHtml = `<p>${fileName}</p>`
    else{
      document.getElementById("uploadFile").innerHtml = `<p>No file chosen</p>`
    }
  }

function Home() {
  return (
    <div className="home">
        <div className="background-splash">
            <img className="background-img" src="/croppedallthree.png" />
            <div className="main-content stack-top">
                <h1 className="page-title">Play your favorite songs on your favorite instruments.</h1>
                <div className="file-upload-container">
                    <div className="upload-button">
                        <p>Upload MP3 or WAV</p>
                    </div>
                <input type="file" id="filetoupload" name="filetoupload" accept="audio/mp3, audio/wav" onChange={fileChange} />
                    <div className="upload-status" id="uploadFile">
                        <p>No file chosen</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
 
export default Home;
 
