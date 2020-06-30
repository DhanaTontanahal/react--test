import React, { Component } from 'react'

class ClickCounter extends Component {
    constructor()
    {
        super();
        this.state={
            counter:0
        }
    }


    handleClick=()=>{
        this.setState({counter:this.state.counter+1});
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.counter}</button>
            </div>
        )
    }
}

export default ClickCounter
