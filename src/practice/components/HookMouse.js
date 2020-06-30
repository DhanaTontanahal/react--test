import React , {useState, useEffect} from 'react'

function HookMouse() {
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);

    const handleMM=(e)=>{
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("use effect called");
        window.addEventListener('mousemove',handleMM);

        return ()=>{
            console.log("unmounting")
            window.removeEventListener('mousemove',handleMM)
        }
    },[])

    return (
        <div>
            X-{x} Y - {y}
        </div>
    )
}

export default HookMouse
