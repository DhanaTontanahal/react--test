import React , {useState, useEffect} from 'react'
import { func } from 'prop-types';
import axios from 'axios';

function DataFetching() {

    const [post,setPost] = useState({});
    const [id,setId]=useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    const handleButtonClick = ()=>{
        setIdFromButtonClick(id)
    }

    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`;
        axios.get(url).then(resp=>{
            console.log(resp);
            setPost(resp.data)
        }).catch(err=>{
            console.log(err)
        })
    },[idFromButtonClick])

    return (
        <div>
            <button onClick={handleButtonClick}>Send</button>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <ul>
            {post.title}
            </ul>
        </div>
    )
}

export default DataFetching
