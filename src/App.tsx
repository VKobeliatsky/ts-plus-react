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
        <div className="histories">
            <History entries={3} />
            <History entries={10} />
        </div>
      </div>
    );
  }
}

export default App;
