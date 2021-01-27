import React, { Component } from 'react'

export default class Button extends Component {
    constructor(props){
        super(props);
    }

    

    render() {
        const {onClickHandler,name, press,pressval,data,op} = this.props;

        return (
            <button onClick={onClickHandler} name={name} className={(press)?((pressval === {name})?((pressval === data.correcta)?"green":"red"):"background"):"background"}>
                {op}
            </button>   
        )
    }
}
