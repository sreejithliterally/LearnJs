import React, { Component } from 'react'

class Form extends Component {

    onHandleChange=(event)=>{
        this.setState({
            inputValue: event.target.value
        })
;    }
    state = {
        inputValue:""

    }
    render() {
        return (
                <form>
                
                <h2> Form component</h2>
                <input type ="text" value={this.setState.inputValue} onChange={this.onHandleChange}></input>

                </form>
        )
    }
}

export default Form;