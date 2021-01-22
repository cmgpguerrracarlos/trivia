import React, { Component } from 'react'
import './App.css'

class Card extends Component {
    constructor(props){
        super(props);

        this.state = [{
            question:"",
            op1:"",
            op2:"",
            op3:"",
            op4:"",
            op5:"",
            correcta:"",
            color:""
        }]
    }
    
    componentDidMount(){
        this.setState({
            question:"La pregunta se va a colocar aca, hay una unica respuesta posible",
            op1:"Opcion 1",op2:"Opcion 2",op3:"Opcion 3",op4:"Opcion 4",op5:"Opcion 5",
            correcta:"3",color:"yellow"
        });
    }

    onClickHandler = (e)=>{
        let c = e.currentTarget.name;
        if(c === this.state.correcta){
            console.log("Correcto");
        }else{
            console.log("No correcto");
        }
        
    }
    render() {
        return (
            <header className="App-header">
                <div className="head-container">
                    <p>{this.state.question}</p>
                </div>
                <div class="main-container">
                    <button onClick={this.onClickHandler} name="1">{this.state.op1}</button>
                    <button onClick={this.onClickHandler} name="2">{this.state.op2}</button>
                    <button onClick={this.onClickHandler} name="3">{this.state.op3}</button>
                    <button onClick={this.onClickHandler} name="4">{this.state.op4}</button>
                    <button onClick={this.onClickHandler} name="5">{this.state.op5}</button>
                </div>
             </header>
        )
    }
}

export default Card;