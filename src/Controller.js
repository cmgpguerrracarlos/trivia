import React, { Component } from 'react';
import axios from 'axios';
import Card from "./Card";

export default class Controller extends Component {
    constructor(props){
        super(props)
        this.state={
            data:{},
            press:false,
            pressval:"",
            pto:0,
            nropregunta:0
        }
    }

    componentDidMount(){
        axios.get("http://localhost:9000/api").then((res,error)=>{
            if(error) throw error;
            let tam = res.data[0].length;
            console.log(tam)
            let q = Math.floor(Math.random()*tam)
            const datos = res.data[0][q];
            this.setState({data:datos,press:false,pto:0});
        })
    };

    onClickHandler = (e)=>{
        if(!this.state.press){
            let opc = e.currentTarget.name;
            if(opc === this.state.data.correcta){
                this.setState({press:true,pressval:opc,pto:this.state.pto +4});
            }else{
                this.setState({press:true,pressval:opc,pto:this.state.pto -1});
            }
        }
        
    }

    onClickNext = (e)=>{
        axios.get("http://localhost:9000/api").then((res,error)=>{
            if(error) throw error;
            let tam = res.data[0].length;
            console.log(tam)
            let q = Math.floor(Math.random()*tam)
            const datos = res.data[0][q];
            console.log(datos)
            this.setState({data:datos,press:false,pto:0});
        })
        console.log("Puntaje total: ",this.state.pto);
    }

    render() {
        return (
            <div className="App">
            <Card data={this.state.data} press={this.state.press} pressval={this.state.pressval} onClickHandler={this.onClickHandler} onClickNext={this.onClickNext}/>
          </div>
        )
    }
}
