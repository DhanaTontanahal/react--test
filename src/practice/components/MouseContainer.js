import React , {useState} from 'react'
import HookMouse from './HookMouse';

function MouseContainer() {
    const [display,setDisplay] = useState(true);

    const handleToggle=()=>{
        setDisplay(!display)
    }
    return (
        <div>
            <button onClick={handleToggle}>Toggle HookMouse</button>
            {
                display && <HookMouse />
            }
        </div>
    )
}

export default MouseContainer
