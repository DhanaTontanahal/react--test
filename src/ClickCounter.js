import React, { Component } from 'react'

class ClickCounter extends Component {
    constructor(){
        this.state={
            countVal:0
        }
    }

    handleClick(){
        this.setState((prevState)=>{
            countVal:prevState.countVal+1;
        })
    }
    render() {
        const {countVal} = this.state;
        return (
            <div>
                <button onClick={this.handleClick}>{countVal}</button>
            </div>
        )
    }
}

export default ClickCounter
