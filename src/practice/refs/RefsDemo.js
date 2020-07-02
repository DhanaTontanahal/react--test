import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef=React.createRef();

        this.state = {
             
        }
    }
    
    componentDidMount(){
        // console.log(this.inputRef)
        this.inputRef.current.focus()
    }

    getValue=()=>{
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.getValue}>Get</button>
            </div>
        )
    }
}

export default RefsDemo
