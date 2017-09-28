import * as React from 'react';
import './App.css';

import Header from './components/header';
import Counter from './components/counter';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}

export default App;
