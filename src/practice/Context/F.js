import React, { Component } from 'react'
import {UserContext} from '../../App'

class F extends Component {
    render() {
        return (
            <div>
                <UserContext.Consumer>
                    {
                        user=>{
                            return <div>{user}</div>
                        }
                    }
                </UserContext.Consumer>
                 Component F
               
               
            </div>
        )
    }
}

export default F
