import React, { Component } from "react";

class Classdemo extends Component{
    constructor(){
        super();
        this.state={name:"lavanya",age:20}
        this.setState({name:"shaju"});
    }

      
   
    render(){
        const {name,age}=this.state;
        return(
           
              <div>
                  <h1>Hello world from class{5*5} {name},{ age} </h1>
                  
              </div>
           
            
        )
    }
}
export default Classdemo;