import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      bestFoods: ["pizza","chocolate","ice cream"]
    }
  }

  //ChangeToList(){this.state.bestFoods.map((elem, index, arr) =>{
    //<h2>this.state.bestFoods.elem<h2/>

  
  render() {

    var foodList=this.state.bestFoods.map((elem, index, arr) =>{
      return (<h2>{elem}</h2>)
    })

    
    return (
      <div className="App">
      {foodList}
      </div>
    );
  }
}


export default App;
