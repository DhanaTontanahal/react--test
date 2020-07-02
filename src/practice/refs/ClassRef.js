import React, { Component } from 'react'
import Input from './Input'

class ClassRef extends Component {
    constructor(props) {
        super(props)

        this.myInoutRef = React.createRef();


    }


    focusInput=()=>{
        this.myInoutRef.current.focusInput()
    }
    
    render() {
        return (
            <div>
                <Input ref={this.myInoutRef}/>
                <button onClick={this.focusInput} >Focus</button>
            </div>
        )
    }
}

export default ClassRef

