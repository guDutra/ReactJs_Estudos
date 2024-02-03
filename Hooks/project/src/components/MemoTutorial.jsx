import React from 'react'
import { useEffect } from 'react';
import { useState, useMemo } from 'react'
import axios from 'axios';
const MemoTutorial = () => {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((res) => {
                setData(res.data);
            });
    }, []);

    const findLongestName = (comments) => {
        if (!comments) return null;

        let longestName = "";
        for (let i = 0; i < comments.length; i++) {
            const currentName = comments[i].name;
            if (currentName.length > longestName.length) {
                longestName = currentName;
            }
        }
        console.log("THIS WAS COMPUTED");
        return longestName;
    };

    const getLongestName = useMemo(() => findLongestName(data),// First argument is a function 
        [data]); // Second argument is what if changed will trigger the function to be computed


    return (
        <div className='Memo'>
            <p>{getLongestName}</p>
            <button
                onClick={() => {
                    setToggle(!toggle);
                }}>Toggle</button>
            {toggle && <h2> toggle</h2>}
        </div>
    )
}

export default MemoTutorial