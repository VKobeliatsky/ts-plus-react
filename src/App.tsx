import * as React from 'react';
import './App.css';

import Header from './components/header';
import Counter from './components/counter';
import HistoryManager from './components/history-manager';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
        <div className="histories">
            <HistoryManager entries={3} />
            <HistoryManager entries={10} />
        </div>
      </div>
    );
  }
}

export default App;
