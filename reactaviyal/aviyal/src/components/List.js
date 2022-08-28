import React, { Component } from 'react'

class List extends Component {

    state = {

        data: [
            {
                id:1,
                name:"sreejith",
                age:20
            },
            {
                id:2,
                name: "exgirlfriend",
                age:0
            }
        ]
            
             
        
    }
    render() {
        return (
            
                <ul> {this.state.data.map((value,index)=>{
                    return(
                        <li key={index}>
                            id number {value.id}
                             name {value.name}
                               age{value.age}
                        </li>
                    )})}
                    </ul>
                    )}


}

export default List;