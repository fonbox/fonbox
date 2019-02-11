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
function MyApp() {
  return (<ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>);
}

ReactDOM.render(<MyApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
