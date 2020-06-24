import React, { Component } from 'react'
import Comment from './Comment';
class RecursiveRender extends Component {
    render() {
        const commentData = {
            title: "Root",
            author: "RotAuthor",
            comments: [
                {
                    id: 1,
                    text: "commentlevel1",
                    author: "user1",
                    children: [
                        {
                            id: 2,
                            text: "commentlevel2",
                            author: "user3",
                            children: [
                                {
                                    id: 3,
                                    text: "commentlevel3",
                                    author: "user4",
                                    children: [
                                        {
                                            id: 265,
                                            text: "commentlevel4",
                                            author: "user32",
                                            children: [
                                                {
                                                    id: 3,
                                                    text: "commentlevel5",
                                                    author: "user34",
                                                    children: []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
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
                            children: [
                                {
                                    id: 35,
                                    text: "comentlevel3-2",
                                    author: "user7",
                                    children: []
                                }
                            ]
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
                            <Comment key={comment.id} comment={comment} />
                        )
                    })
                }
            </div>
        )
    }
}

export default RecursiveRender
