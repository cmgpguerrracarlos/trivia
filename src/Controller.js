import React, { Component } from 'react';
import axios from 'axios';
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
        axios.get("http://localhost:9000/api").then((res,error)=>{
            if(error) throw error;
            const datos = res.data[0];
            console.log(datos)
            this.setState({data:datos,press:false,pto:0});
        })
    };

    onClickHandler = (e)=>{
        let opc = e.currentTarget.name;
        if(opc === this.state.data.correcta){
            this.setState({press:true,pto:this.state.pto +4});
        }else{
            this.setState({press:true,pto:this.state.pto -1});
        }
    }

    onClickNext = (e)=>{
        axios.get("http://localhost:9000/api").then((res,error)=>{
            if(error) throw error;
            const datos = res.data[0];
            console.log(datos)
            this.setState({data:datos,press:false,pto:0});
        })
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
