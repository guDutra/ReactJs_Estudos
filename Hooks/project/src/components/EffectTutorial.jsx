import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function EffectTutorial() {

    const [data, setData] = useState("");
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    useEffect(() => { // This will be called everytime when the page renders before anything
        axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
            setData(res.data[0].email)
            console.log("CALLING API")
        }).catch(error => console.error(error));
    }, [count]); /// You can pass witch states when changed will execute the useEffect function again
    /* When you change the state the page re-render so the useEffect will  execute again */
    return (
        <div>
            <h2>Hello {data}</h2>
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default EffectTutorial