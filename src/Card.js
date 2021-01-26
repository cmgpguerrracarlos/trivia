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
                    <button onClick={onClickHandler} name="1" className={(press)?((pressval === "1")?((pressval === data.correcta)?"green":"red"):"background"):"background"}>{data.op1}</button>
                    <button onClick={onClickHandler} name="2" className={(press)?((pressval === "2")?((pressval === data.correcta)?"green":"red"):"background"):"background"}>{data.op2}</button>
                    <button onClick={onClickHandler} name="3" className={(press)?((pressval === "3")?((pressval === data.correcta)?"green":"red"):"background"):"background"}>{data.op3}</button>
                    <button onClick={onClickHandler} name="4" className={(press)?((pressval === "4")?((pressval === data.correcta)?"green":"red"):"background"):"background"}>{data.op4}</button>
                    <button onClick={onClickHandler} name="5" className={(press)?((pressval === "5")?((pressval === data.correcta)?"green":"red"):"background"):"background"}>{data.op5}</button>
                </div>
                <button onClick={this.props.onClickNext}>next</button>
                <h2>{console.log(pressval)}</h2>
             </header>
        )
    }
}

export default Card;