import { Component } from "react";
import Form from "./Form";

class Compteur extends Component{

    constructor(props){
        super(props)
        this.state = {
            number:0,
            name:"ahmed"
        }
    }

    componentDidMount = () => {
        console.log("render !!!!!!")
    }

    componentDidUpdate = () => {
        console.log('start updated !!')
    }

    componentWillUnmount = () => {
        console.log('component unmounted')
    }

    incrementer = () => {
        this.setState({number:this.state.number + 1})
    }
    

    render(){
        return (
            <>
                <h1>{this.state.number}</h1>
                <button onClick={this.incrementer}>Click</button>
                {this.state.number < 3 && <Form/>}
            </>
        )
    }
}

export default Compteur