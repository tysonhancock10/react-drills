import React, { Component } from 'react';
import './App.css';
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Image myImage={"https://s.hswstatic.com/gif/giant-panda-bear-pictures0.jpg"}/>
      </div>
    );
  }
}

export default App;
