import React, { Component } from 'react'
import Card from "./Card";

export default class Controller extends Component {
    constructor(props){
        super(props)
        this.state={
            data:{}
        }
    }

    componentDidMount(){
        this.setState({data:{
            question:"La pregunta se va a colocar aca, hay una unica respuesta posible",
                op1:"Opcion 1",op2:"Opcion 2",op3:"Opcion 3",op4:"Opcion 4",op5:"Opcion 5",
                correcta:"1",press:false
        }});
    }

    onClickHandler = (e)=>{
        let c = e.currentTarget.name;
        if(c === this.state.correcta){
            console.log("Correcto");
        }else{
            console.log("No correcto");
        }
        this.setState({
            data:{
                question:"La pregunta se va a colocar aca, hay una unica respuesta posible",
                op1:"Opcion 1",op2:"Opcion 2",op3:"Opcion 3",op4:"Opcion 4",op5:"Opcion 5",
                correcta:"1",press:true
            }
        });
        
    }

    onClickNext = (e)=>{
        this.setState({
            data:{
                question:"La pregunta se va a colocar aca, hay una unica respuesta posible",
                op1:"Opcion 1",op2:"Opcion 2",op3:"Opcion 3",op4:"Opcion 4",op5:"Opcion 5",
                correcta:"1",press:false
            }
        })
    }

    render() {
        return (
            <div className="App">
            <Card data={this.state.data} onClickHandler={this.onClickHandler} onClickNext={this.onClickNext}/>
          </div>
        )
    }
}
