import React, { Component } from 'react'

export default class Button extends Component {
    
    render() {
        //const {onClickHandler,name, press,pressval,data,op} = this.props;

        return (
            <button onClick={this.props.onClickHandler} name={this.props.name} className={(this.props.press)?((this.props.pressval === this.props.name)?((this.props.pressval === this.props.data.correcta)?"green":"red"):"background"):"background"}>
                {this.props.op}
            </button>   
        )
    }
}
