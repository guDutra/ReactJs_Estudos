import React, { useContext } from 'react'
import { AppContext } from './ContextTutorial'
const User = () => {
    const { username } = useContext(AppContext);
    return (
        <div>
            <h3>User: {username}</h3>
        </div>
    )
}

export default User