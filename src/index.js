import React from 'react';
import ReactDOM from 'react-dom';
import Nincompoops from './js/components/Nincompoops.js';
import { HashRouter } from 'react-router-dom';
import 'uikit/dist/css/uikit.min.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nincompoops />
      </div>
    )
  } 
}

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('container')
);
