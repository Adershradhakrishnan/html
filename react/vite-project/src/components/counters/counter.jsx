import React, { Component } from "react";

class counter extends Component {
    constructor(props) {
        super(props);
        this.state = {count : props.initialValue};
    }

     increment = ()=>{
        this.setState({count: this.state.count +1});
     }
     render(){
        return(
            <>
            <p>count: {this.state.count}</p>
            <button onClick={this.increment}>Increment</button>
            </>
        )
     }
}
export default counter;