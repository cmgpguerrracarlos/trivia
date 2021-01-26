import React, { Component } from 'react'
import './App.css'

class Card extends Component {   
     
    render() {
        const {onClickHandler,press,pressval,data} = this.props;
        return (
            <header className="App-header">
                <div className="head-container">
                    <p>{this.props.data.question}</p>
                </div>
                <div className="main-container background">
                    <button onClick={onClickHandler} name="1" className={(!press)?"background":data.correcta === "1"?"green":"red"} >{data.op1} </button>
                    <button onClick={onClickHandler} name="2" className={(!press)?"background":data.correcta === "2"?"green":"red"}>{data.op2}</button>
                    <button onClick={onClickHandler} name="3" className={(!press)?"background":data.correcta === "3"?"green":"red"}>{data.op3}</button>
                    <button onClick={onClickHandler} name="4" className={(!press)?"background":data.correcta === "4"?"green":"red"}>{data.op4}</button>
                    <button onClick={onClickHandler} name="5"className={(!press)?"background":data.correcta === "5"?"green":"red"}>{data.op5}</button>
                </div>
                <button onClick={this.props.onClickNext}>next</button>
             </header>
        )
    }
}

export default Card;