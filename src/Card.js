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
            press:false
        }]
    }
    
    componentDidMount(){
        this.setState({
            question:this.props.data.q,
            op1:this.props.data.op1,
            op2:this.props.data.op2,
            op3:this.props.data.op3,
            op4:this.props.data.op4,
            op5:this.props.data.op5,
            correcta:this.props.data.correcta,
            press:this.props.data.press
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

    onClickNext = (e)=>{
        this.setState({
            press:false
        })
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
                <button onClick={this.onClickNext}>next</button>
             </header>
        )
    }
}

export default Card;