import React, { Component } from 'react'

class MouseMove extends Component {

    constructor(){
        super();

        this.state={
            X:0,
            Y:0
        }
    }
    handleMouseMove=(e)=>{
        this.setState({X:e.clientX, Y:e.clientY})
    }
    componentDidMount(){
        window.addEventListener('mousemove',this.handleMouseMove);
    }
    render() {

        return (
            <div>
               X  -  {this.state.X} Y - {this.state.Y}
            </div>
        )
    }
}

export default MouseMove
