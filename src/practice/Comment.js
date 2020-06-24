import React, { Component } from 'react'

class Comment extends Component {

    constructor(props) {
        super(props);

        console.log("in child constructor");

        this.state = {
            comment: props.comment
        }

    }
    render() {
        console.log("in Comment class...from "+this.props.from)
        const { comment } = this.state;

        const nestedComments = (comment.children || []).map(comment => {
            return <Comment key={comment.id} comment={comment} from="self" />
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
