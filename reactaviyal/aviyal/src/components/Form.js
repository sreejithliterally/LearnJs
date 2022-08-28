import React, { Component } from 'react'

class Form extends Component {

    state = {
        firstName:"",
        secondName:""
        
    }

    onHandleChange=(event)=>{
        this.setState({
        
        [event.target.name] : event.target.value
        })
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
                value={this.setState.firstName}
                name='firstName'
                onChange={this.onHandleChange}
                />


                <input type ="text"
                name='lastName'
                value={this.setState.secondName}
                onChange={this.onHandleChange}
                />


                <button  onClick={this.onSubmit}>submit</button>
                </form>
        )
    }
}

export default Form;