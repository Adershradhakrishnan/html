import React,{component} from "react";

class Greeting extends component{
    render(){
        return<h1>hai {this.props.name}i am class component</h1>
    }
}

export default Greeting;