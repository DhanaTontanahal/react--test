import React, { Component } from 'react'

class NestedChild extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        }
    }
    render() {

        const { data } = this.state;

        const NestedChildren = (data.children || []).map((nestedchild, index) => {
            <NestedChild key={nestedchild.id} nestedchild={nestedchild} />
        })

        return (
            <div style={{ "marginLeft": "25px", "marginTop": "10px" }}>
                <div>{data.text}</div>
                {NestedChildren}
            </div>
            
        )
    }
}

export default NestedChild
