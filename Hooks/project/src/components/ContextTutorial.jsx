import React, { useState, createContext } from 'react'
import User from './User';
import Login from './Login';

export const AppContext = createContext(null);
const ContextTutorial = () => {
    const [username, setUsername] = useState("");
    return (
        <AppContext.Provider value={{ username, setUsername }}>
            <div>
                <Login />
                <User />
            </div>
        </AppContext.Provider>
    )
}

export default ContextTutorial