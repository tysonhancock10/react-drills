import React, { Component } from 'react';
import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor(){
    super()
    this.state={
      tasks:[],
        input: ''
      };
      this.handleAddTask = this.handleAddTask.bind( this );
  }
  handleAddTask(){
    this.setState({
      tasks: [...this.state.tasks, this.state.input],
      input: ''
    })
  }
    handleInputChange(value){
      this.setState({
        input: value
      })
    }
  
  render() {
    let tasks = this.state.tasks.map( (elem, i, arr) =>{
      return (
        <Todo key={i} task={elem} />
      )
    })
    return (
      <div className="App">
        <h3>My to-do list:</h3>
        <div>
          <input value={this.state.input}
                placeholder="Enter new task"
                onChange={ (e) => this.handleInputChange(e.target.value)}/>
        <button onClick={this.handleAddTask}>Add</button>
        </div>
      
      <br />
      
      { tasks }
      </div>
      
    );
  }
}

export default App;
