import React, { useRef } from 'react'
import Button from './Button'

const ImperativeHandle = () => {
    const buttonRef = useRef(null);
    return (
        <div>
            <button onClick={() => {
                buttonRef.current.alterToggle();
            }}>Buttom from Parent</button>
            <Button ref={buttonRef} />
        </div>
    )
}

export default ImperativeHandle