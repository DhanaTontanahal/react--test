import React, { Component } from 'react'
import Comment from './Comment'

class Parent extends Component {
   
    render() {
        const commentData = {
            title: "Root",
            author: "RotAuthor",
            comments: [
                {
                    id: 1,
                    text: "commentlevel1-1",
                    author: "user1",
                    children: []
                },
                {
                    id: 4,
                    text: "commentlevel1-2",
                    author: "user5",
                    children: [
                        {
                            id: 25,
                            text: "comentlevel2-2",
                            author: "user6",
                            children: []
                        }
                    ]
                }
            ]
        }


        return (
            <div>
                {
                    commentData.comments.map((comment) => {
                        return (
                            <Comment key={comment.id} comment={comment} from="parent"/>
                        )
                    })
                }
            </div>
        )
    }
}

export default Parent;