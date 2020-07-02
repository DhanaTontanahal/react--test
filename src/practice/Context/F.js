import React, { Component } from 'react'
import {UserContext} from '../../App'

class F extends Component {
    render() {
        return (
            <div>
                  Component F
                <UserContext.Consumer>
                    {
                        user=>{
                            return <div>{user}</div>
                        }
                    }
                </UserContext.Consumer>
               
               
               
            </div>
        )
    }
}

export default F
