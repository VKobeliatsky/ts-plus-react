import * as React from 'react';
import './App.css';

import Header from './components/header';
import Counter from './components/counter';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Counter increment={3} decrement={2} />
      </div>
    );
  }
}

export default App;
