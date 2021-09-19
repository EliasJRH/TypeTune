import React from 'react'
import './Loading.scss';

function Loading() {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8"/>
        <link href="loading.css" rel="stylesheet"/>
        <title>Loading</title>
      </head>
      <body>
        <img src="allthree.png"/>
        <div class="loader"></div>
      </body>
    </html>
  );
}
 
export default Loading;
