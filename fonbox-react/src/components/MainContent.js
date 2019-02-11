import React from 'react';

// Create a 'functional component' that returns some JSX.
function MainContent() {
  return (
    <div>
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
    </div>
  );
}

export default MainContent;
