import React , {useContext} from 'react'
import {UserContext} from '../../App'

function E() {
    const user = useContext(UserContext);
    console.log(user)
    return (
        <div>
            {user}
        </div>
    )
}

export default E
