import React , {useState} from 'react'


function HookCounter2() {
    const initialCOunt = 0;
    const [count,setCount] = useState(initialCOunt);

    const incrementFive=()=>{
        for(var i = 0 ; i < 5 ; i++){
            setCount(prevCount=>    prevCount+1)
        }
    }
    return (

        <div>
            Count {count}
            <button onClick={()=>setCount(initialCOunt)}>Reset</button>
            <button onClick={()=>setCount(prevCount=>    prevCount+1)}>Increment</button>
            <button onClick={()=>setCount(prevCount=>    prevCount-1)}>Decrement</button>

             <button onClick={incrementFive}>+5</button>

        </div>
    )
}

export default HookCounter2
