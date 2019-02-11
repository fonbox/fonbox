import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // import 'App' HTML component
import * as serviceWorker from './serviceWorker';

// render the 'App' componenet into the div with id='root'
// this is JSX (when HTML goes inside JavaScript)
// ReactDOM.render(<App />, document.getElementById('root'));

// Here is a useful React tutorial:
// https://www.youtube.com/watch?v=DLX62G4lc44

// Create a 'functional component' that returns some JSX.
function FonBox() {
  return (
    <body>
      <h1> Hello, welcome to FonBox! </h1>
      <h2> Put your phone in the box to have fun! </h2>
      <h3> This app needs your camera and microphone access before the <em>fun times</em> begin </h3>
      <h4> For the best experience, use Safari on iPhone or Chrome on Android. </h4>
      <div class="img-div">
        <img src="https://raw.githubusercontent.com/mfekadu/coursera-test/master/site/img/very_nice.gif" alt="very nice gif borat" />
      </div>
      <button class="primary_btn" id="showVideo">Open camera</button>
      <div id="errorMsg"></div>
      <video id="gum-local" autoplay playsinline></video>
      <div>
          <a href="https://github.com/fonbox/fonbox" id="viewSource">View source code on GitHub</a>
      </div>
    </body>
  );
}

ReactDOM.render(<FonBox />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
