import React, { Component } from 'react'

class Comment extends Component {

    constructor(props) {
        super(props);


        this.state = {
            comment: props.comment
        }

    }
    render() {

        const { comment } = this.state;

        const nestedComments = (comment.children || []).map(comment => {
            return <Comment key={comment.id} comment={comment} type="child" />
        })

        return (
            <div style={{ "marginLeft": "25px", "marginTop": "10px" }}>
                <div>{comment.text}</div>
                {nestedComments}
            </div>
        )

    }
}

export default Comment
