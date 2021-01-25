import React, { Component } from 'react'
import Card from "./Card";

export default class Controller extends Component {
    constructor(props){
        super(props)
        this.state={
            data:{},
            press:false
        }
    }

    componentDidMount(){
        this.setState({data:{
            question:"La pregunta se va a colocar aca, hay una unica respuesta posible",
                op1:"Opcion 1",op2:"Opcion 2",op3:"Opcion 3",op4:"Opcion 4",op5:"Opcion 5",
                correcta:"1"
        },press:false
    });
    }

    onClickHandler = (e)=>{
        this.setState({
            press:true
        });
        
    }

    onClickNext = (e)=>{
        this.setState({
            press:false
        })
    }

    render() {
        return (
            <div className="App">
            <Card data={this.state.data} press={this.state.press} onClickHandler={this.onClickHandler} onClickNext={this.onClickNext}/>
          </div>
        )
    }
}
