import React from 'react'
import { useEffect } from 'react'

const Child = ({ returnComment }) => {
    useEffect(() => {
        console.log("THIS FUNCION WAS CALLED")
    }, [returnComment]);
    return (
        <div>
            <h3>{returnComment("Gustavo")}</h3>
        </div>
    )
}

export default Child