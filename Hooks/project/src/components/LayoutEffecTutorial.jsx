import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react'

const LayoutEffecTutorial = () => {
    /* Good to be used to load things before the API request finish  */

    const inputRef = useRef(null);
    useLayoutEffect(() => { /*  Is called before the useEffect*/
        console.log("useLayoutEffect");
        console.log(inputRef.current.value);
    }, []);

    useEffect(() => {
        console.log("useEffect")
        inputRef.current.value = "Dutra"
    }, []);
    return (
        <div>
            <input ref={inputRef} value="Gustavo" type="text" />
        </div>
    )
}

export default LayoutEffecTutorial