import React, { Component } from 'react'

class Form extends Component {

    state = {
        inputValue:"trtrtr"

    }

    onHandleChange=(event)=>{
        this.setState({
            inputValue: event.target.value
        });
    }
    

    onSubmit =()=>{
        console.log(this.state)
    }
  
    render() {
        return (
                <form>
                
                <h2> Form component</h2>
                <input type ="text" value={this.setState.inputValue} onChange={this.onHandleChange}></input>
                <button type="button" onClick={this.onSubmit}>submit</button>
                </form>
        )
    }
}

export default Form;