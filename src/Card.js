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
            color:"",
            press:false
        }]
    }
    
    componentDidMount(){
        this.setState({
            question:"La pregunta se va a colocar aca, hay una unica respuesta posible",
            op1:"Opcion 1",op2:"Opcion 2",op3:"Opcion 3",op4:"Opcion 4",op5:"Opcion 5",
            correcta:"1",color:"yellow",press:false
        });
    }

    onClickHandler = (e)=>{
        let c = e.currentTarget.name;
        if(c === this.state.correcta){
            console.log("Correcto");
        }else{
            console.log("No correcto");
        }
        this.setState({
            press:true
        });
        
    }
    render() {
        return (
            <header className="App-header">
                <div className="head-container">
                    <p>{this.state.question}</p>
                </div>
                <div class="main-container background">
                    <button onClick={this.onClickHandler} name="1" className={(!this.state.press)?"background":this.state.correcta === "1"?"green":"red"} >{this.state.op1} </button>
                    <button onClick={this.onClickHandler} name="2" className={(!this.state.press)?"background":this.state.correcta === "2"?"green":"red"}>{this.state.op2}</button>
                    <button onClick={this.onClickHandler} name="3" className={(!this.state.press)?"background":this.state.correcta === "3"?"green":"red"}>{this.state.op3}</button>
                    <button onClick={this.onClickHandler} name="4" className={(!this.state.press)?"background":this.state.correcta === "4"?"green":"red"}>{this.state.op4}</button>
                    <button onClick={this.onClickHandler} name="5"className={(!this.state.press)?"background":this.state.correcta === "5"?"green":"red"}>{this.state.op5}</button>
                </div>
             </header>
        )
    }
}

export default Card;