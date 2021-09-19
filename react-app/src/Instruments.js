import React from 'react'
import './Instruments.scss';
import mic from './images/micinstrument.png';
import keyboard from './images/keyboardinstrument.png';
import drum from './images/druminstrument.png';

function Instruments() {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8" />
        <link href="instruments.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Arvo&display=swap" rel="stylesheet" />
        <title>Instruments</title>
      </head>
      <body>
        <div class="container">
          <div class="instruments">
            <img src={mic} />
            <img src={keyboard} />
            <img src={drum} />
          </div>
          <h3>Choose the instrument you want to play</h3>
        </div>
      </body>
    </html>
  );
}
 
export default Instruments;