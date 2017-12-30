import React from 'react';
import ReactDOM from 'react-dom';
import Nincompoops from './js/components/Nincompoops.js';
import { BrowserRouter } from 'react-router-dom';

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
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('container')
);
