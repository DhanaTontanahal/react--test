import React , {useState} from 'react'

function HookCounter3() {

    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <div>
            <input tyepe="text" value={name.firstName} onChange={e => setName({ ...name,firstName: e.target.value })} />
            <input tyepe="text" value={name.lastName} onChange={e => setName({ ...name,lastName: e.target.value })} />
            <h1>Your name is {name.firstName}{name.lastName}</h1>
        </div>
    )
}

export default HookCounter3
