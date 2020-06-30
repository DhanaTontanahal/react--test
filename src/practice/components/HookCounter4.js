import React , {useState} from 'react'

function HookCounter4() {

    const [items,setItems]=useState([]);

    const handleAddItemClick =()=>{
        setItems([...items, { id:Math.floor(Math.random()*10)+1,
        value:"randomvalue"}])
    }
    return (
        <div>
            <button onClick={handleAddItemClick}>Add Item</button>
            <ul>
                {
                    items.map(item=>
                        (<li>{item.id}-{item.value}</li>))
                }
            </ul>
        </div>
    )
}

export default HookCounter4
