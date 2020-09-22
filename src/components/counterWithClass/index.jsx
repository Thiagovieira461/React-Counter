import React, {Component} from "react";

class CounterWithClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: 0,
        };
    }
    
    componentWillMount(){
        console.log("To aqui");
    };

    render(){
        console.log("I'm Here");
        return (
        <div>
            <p>{this.state.value}</p>
            <button onClick={()=>{this.setState({value: this.state.value + 1})}}> + </button>
            <button onClick={()=>{this.setState({value: this.state.value - 1})}}> - </button>
        </div>
        );
    }
}

export default CounterWithClass;