import React, { Component } from 'react'
import Card from "./Card";

export default class Controller extends Component {
    constructor(props){
        super(props)
        this.state=[{
            question:"La pregunta se va a colocar aca, hay una unica respuesta posible",
                op1:"Opcion 1",op2:"Opcion 2",op3:"Opcion 3",op4:"Opcion 4",op5:"Opcion 5",
                correcta:"1",color:"yellow",press:false
        }]
    }

    componentDidMount(){
        this.setState({
            question:"La pregunta se va a colocar aca, hay una unica respuesta posible",
                op1:"Opcion 1",op2:"Opcion 2",op3:"Opcion 3",op4:"Opcion 4",op5:"Opcion 5",
                correcta:"1",color:"yellow",press:false
        });
    }

    render() {
        return (
            <div className="App">
            <Card q={this.state.question}/>
          </div>
        )
    }
}
