import React, { Component } from 'react';
import './App.css';

class App extends Component {
      constructor(){
        super()
        this.state={
          bestFoods:['pizza','chocolate','pineapple','reeses','steak']
        }
      }
      handleChange(changes){
        this.setState({changed: changes})
      }
  render() {
      var foodList= this.state.bestFoods.filter((elem,i) =>{
       return( elem.includes(this.state.changed))
      }).map((elem, index) =>{
        return <h2 key={index}>{elem}</h2>
      })
      
      
    return (
      <div className="App">
       <input onChange={(e) => this.handleChange(e.target.value)} type="text"/>
       {foodList}
      </div>
    );
  }
}

export default App;
