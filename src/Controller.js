import React, { Component } from 'react'
import Card from "./Card";

export default class Controller extends Component {
    constructor(props){
        super(props)
        this.state={
            data:{},
            press:false,
            pto:0
        }
    }

    componentDidMount(){
        this.setState({data:{
            question:"La pregunta se va a colocar aca, hay una unica respuesta posible",
                op1:"Opcion 1",op2:"Opcion 2",op3:"Opcion 3",op4:"Opcion 4",op5:"Opcion 5",
                correcta:"1"
        },press:false,
        pto:0
    });
    }

    onClickHandler = (e)=>{
        let opc = e.currentTarget.name;
        if(opc === this.state.data.correcta){
            this.setState({press:true,pto:this.state.pto +4});
        }else{
            this.setState({press:true,pto:this.state.pto -1});
        }
    }

    onClickNext = (e)=>{
        this.setState({
            press:false
        });
        console.log("Puntaje total: ",this.state.pto);
    }

    render() {
        return (
            <div className="App">
            <Card data={this.state.data} press={this.state.press} onClickHandler={this.onClickHandler} onClickNext={this.onClickNext}/>
          </div>
        )
    }
}
