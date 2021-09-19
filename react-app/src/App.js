import logo from './logo.svg';
import './App.scss';
 
function App() {
  return (
    <><link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Arvo" /><link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'></link>
    <div className="App">
      <header className="App-header">
      </header>
      <div className="background-splash">
        <img className="background-img" src="/allthree.png" />
      </div>
   
      <div className="main-content stack-top">
        <h1 className="page-title">Play your favorite songs on your favorite instruments.</h1>
        <div className="file-upload-container">
          <div className="upload-button">
            <p>Upload an MP3</p>
          </div>
          <div className="upload-status">
            <p>No file chosen</p>
          </div>
        </div>
      </div>
    </div></>
  );
}
 
export default App;
 
