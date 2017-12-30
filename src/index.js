import React from 'react';
import ReactDOM from 'react-dom';
import Nincompoops from './js/components/Nincompoops.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <Nincompoops />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
