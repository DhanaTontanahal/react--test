import React, { Component } from 'react'


const ChildComponent = React.forwardRef((props,ref) =>{

    return(
        <div>
            <input type="text" ref={ref} />
        </div>
    )

}) 
export default ChildComponent
