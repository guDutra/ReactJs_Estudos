import React from 'react'
import { AppContext } from './ContextTutorial'
import { useContext } from 'react'
const Login = () => {
    const { setUsername } = useContext(AppContext);
    return (
        <div>
            <input
                onChange={(event) => {
                    setUsername(event.target.value);
                }} />

        </div>
    )
}

export default Login