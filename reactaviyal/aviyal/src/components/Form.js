import React, { Component } from 'react'

class Form extends Component {

    state = {
        inputValue:""

    }

    onHandleChange=(event)=>{
        this.setState({
            inputValue: event.target.value
        });
    }
    

    onSubmit =(event)=>{
        event.preventDefault();
        console.log(this.state)
    }
  
    render() {
        return (
                <form>
                
                <h2> Form component</h2>
                <input type ="text"
                value={this.setState.inputValue}
                onChange={this.onHandleChange}
                />
                <button  onClick={this.onSubmit}>submit</button>
                </form>
        )
    }
}

export default Form;