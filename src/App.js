import React , { Component } from 'react';
import './App.css';
import News from "./components/News";

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <News />

      </div>
    );
  }
}

export default App;