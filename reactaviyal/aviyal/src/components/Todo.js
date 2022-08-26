import React, {Component} from "react";

class Todo extends Component{
    render(){
        return(
            <div className="todo">
                <h1>Todo test</h1>
                <h1>{this.props.mystring}</h1>
                    
            </div>
        );
    }
}

export default Todo