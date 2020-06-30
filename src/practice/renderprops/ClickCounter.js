import React, { Component } from 'react'

class ClickCounter extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        const {count,incrementCount} = this.props;
        return (
            <div>
                    <button onClick={incrementCount}>{count}</button>
            </div>
        )
    }
}

export default ClickCounter
