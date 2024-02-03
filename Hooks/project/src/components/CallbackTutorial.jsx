import React, { useState } from 'react'
import Child from './Child';
import { useCallback } from 'react';
const CallbackTutorial = () => {

    const [data, setData] = useState("Hello this is a message!");
    const [toggle, setToggle] = useState(false);

    const returnComment = useCallback((name) => {
        return data + name;
    }, [data]);
    return (
        <div>
            <Child returnComment={returnComment} />
            <button
                onClick={() => {
                    setToggle(!toggle);
                }}>Toggle</button>
            {toggle && <h2> toggle</h2>}
        </div>
    )
}

export default CallbackTutorial