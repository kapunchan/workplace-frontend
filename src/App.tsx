import * as React from 'react';
import './App.css';

import logo from './logo.svg';

export default class App extends React.PureComponent {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          快开始吧！！！ <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}
