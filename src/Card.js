import React, { Component } from 'react'
import './App.css'

class Card extends Component {    
    render() {
        return (
            <header className="App-header">
                <div className="head-container">
                    <p>{this.props.data.question}</p>
                </div>
                <div class="main-container background">
                    <button onClick={this.props.onClickHandler} name="1" className={(!this.props.press)?"background":this.props.data.correcta === "1"?"green":"red"} >{this.props.data.op1} </button>
                    <button onClick={this.props.onClickHandler} name="2" className={(!this.props.press)?"background":this.props.data.correcta === "2"?"green":"red"}>{this.props.data.op2}</button>
                    <button onClick={this.props.onClickHandler} name="3" className={(!this.props.press)?"background":this.props.data.correcta === "3"?"green":"red"}>{this.props.data.op3}</button>
                    <button onClick={this.props.onClickHandler} name="4" className={(!this.props.press)?"background":this.props.data.correcta === "4"?"green":"red"}>{this.props.data.op4}</button>
                    <button onClick={this.props.onClickHandler} name="5"className={(!this.props.press)?"background":this.props.data.correcta === "5"?"green":"red"}>{this.props.data.op5}</button>
                </div>
                <button onClick={this.props.onClickNext}>next</button>
             </header>
        )
    }
}

export default Card;