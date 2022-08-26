//class component
import './App.css';
import React, {Component} from "react";
import Todo from './components/Todo';

class App extends Component{
//state
  state = {
    mystring: "hello",
  };

  render(){
    return(
      <div className="App">

        <h1> Hello world</h1>
        
        <Todo mystring={this.state.mystring}/>
      </div>

    );
  }
}




export default App;
