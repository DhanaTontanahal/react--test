import React, { Component } from 'react'

class ClassComponent extends Component {
    render() {
        return (
            <div>

                <div className="relative">
                This is the parent DIV element
                    <div className="absolute">
                        This is the Child Div Element 
                    </div>
                </div>
                
            </div>
        )
    }
}

export default ClassComponent
