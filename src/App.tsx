import * as React from 'react';
import './App.css';

import Header from './components/header';
import Counter from './components/counter';
import History from './components/history';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
        <History />
      </div>
    );
  }
}

export default App;
