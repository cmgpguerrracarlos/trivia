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
            nropregunta:1
        }
    }

    //url = "http://192.168.1.5:9000/api";
    url = "http://192.168.43.112:9000/api"

    componentDidMount(){
        axios.get(this.url).then((res,error)=>{
            if(error) throw error;
            let tam = res.data[0].length;
            console.log(tam)
            let q = Math.floor(Math.random()*tam)
            const datos = res.data[0][q];
            this.setState({data:datos,press:false});
        })
    };

    onClickHandler = (e)=>{
        e.preventDefault();
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
        e.preventDefault();
        axios.get(this.url).then((res,error)=>{
            if(error) throw error;
            let tam = res.data[0].length;
            console.log(tam)
            let q = Math.floor(Math.random()*tam)
            const datos = res.data[0][q];
            console.log(datos)
            this.setState({data:datos,press:false,nropregunta:this.state.nropregunta+1});
        })
        console.log("Puntaje total: ",this.state.pto);
    }

    render() {
        return (
            <>
                <Card data={this.state.data} nropregunta={this.state.nropregunta} pto={this.state.pto} press={this.state.press} pressval={this.state.pressval} onClickHandler={this.onClickHandler} onClickNext={this.onClickNext}/>
            </>
        )
    }
}
