import * as serviceWorker from './serviceWorker';
import React from 'react';
import './index.css';
import SamuraiJSApp from './App';
import ReactDOM from 'react-dom';



ReactDOM.render(
<SamuraiJSApp />
 ,document.getElementById('root'))

// API
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();