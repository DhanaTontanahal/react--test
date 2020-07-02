import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {
     constructor(props) {
         super(props)
     
         this.inputRef = React.createRef();
     }
     
     focusInput=()=>{
         this.inputRef.current.focus();
     }
    render() {
        return (
            <div>
                <ChildComponent ref={this.inputRef}/>
                <button onClick={this.focusInput}>Focus</button>
            </div>
        )
    }
}

export default ParentComponent
