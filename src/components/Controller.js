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
            nropregunta:1,
            chances:3
        }
    }

    //url = "http://192.168.1.5:9000/api";
    //url = "http://192.168.43.112:9000/api"
    url = "http://127.0.0.1:9000/api"

    componentDidMount=()=>{
        axios.get(this.url).then((res,error)=>{
            if(error) throw error;
            const datos = res.data[0];
            this.setState({data:datos,press:false,chances:3});
        })
    
    };

    onClickHandler = (e)=>{
        e.preventDefault();
        if(!this.state.press){
            let opc = e.currentTarget.name;
            if(opc === this.state.data.correcta){
                this.setState({press:true,pressval:opc,pto:this.state.pto +4});
            }else{
                this.setState({press:true,pressval:opc,pto:this.state.pto -1,chances:this.state.chances-1});
                console.log(this.state.chances);
            //     if(this.state.chances === 1){
            //         console.log("Perdiste");
            //         document.getElementById('hidden').style.visibility = "visible";

            //         document.getElementById("hidden").appendChild("<h1>mierda</h1>")
            //    }
            }
        }
        
    }

    onClickNext = (e)=>{
       if(this.state.press && this.state.chances>0){
        e.preventDefault();
        axios.get(this.url).then((res,error)=>{
            if(error) throw error;
            const datos = res.data[0];
            this.setState({data:datos,press:false,nropregunta:this.state.nropregunta+1});
        })
        console.log("Puntaje total: ",this.state.pto);

       }else if(this.state.chances===0){
            this.componentDidMount();
       }
    }

    render() {
        return (
            <>
                <Card componentDidMount={this.componentDidMount} chances={this.state.chances} data={this.state.data} nropregunta={this.state.nropregunta} pto={this.state.pto} press={this.state.press} pressval={this.state.pressval} onClickHandler={this.onClickHandler} onClickNext={this.onClickNext}/>
            </>
        )
    }
}
