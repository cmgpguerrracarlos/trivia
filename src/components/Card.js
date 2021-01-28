import React, { Component } from 'react'
import '../App.css'
import Button from './Button.js'

class Card extends Component {   
     
    render() {
        const {onClickHandler,press,pressval,data,nropregunta} = this.props;
        return (
            <header className="App-header">
                <div className="head-container">
                    <p>{this.props.data.question}</p>
                </div>
                <div className="main-container background">
                    <Button onClickHandler={onClickHandler} name="1" press={press} pressval={pressval} data={data} op={data.op1}/>
                    <Button onClickHandler={onClickHandler} name="2" press={press} pressval={pressval} data={data} op={data.op2}/>
                    <Button onClickHandler={onClickHandler} name="3" press={press} pressval={pressval} data={data} op={data.op3}/>
                    <Button onClickHandler={onClickHandler} name="4" press={press} pressval={pressval} data={data} op={data.op4}/>
                    <Button onClickHandler={onClickHandler} name="5" press={press} pressval={pressval} data={data} op={data.op5}/>
                </div>
                <div className="footer">
                    <button className="button" onClick={this.props.onClickNext}>next</button>
                    <p className="texto" >Puntaje total: {this.props.pto} Cantidad de preguntas: {nropregunta}</p>
                </div>
                
             </header>
        )
    }
}

export default Card;