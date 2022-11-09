import React,{Component} from "react";

class ClassComp extends React.Component{
    constructor(props){
        super(props)
        console.log('constructor executed')  
    }

    static getDerivedStateFromProps(){
        console.log("static getDerivedStateFromProps excuted")
        return null;
    }


    componentDidMount(){
        console.log("componentDidMount executed")
    }

    state={
        count:0,
    }

    increment = () =>{
        this.setState({
            count:this.state.count + 1
        })
    }

    decrement = ()=>{
        this.setState({
            count:this.state.count -1
        })
    }

    render(){
        console.log("render method executed")
        return(
            <div>
                <h2>Class Comp</h2>
                <h3>Counter : {this.state.count}</h3>
                <button style={{marginRight:"10px"}} onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

export default ClassComp