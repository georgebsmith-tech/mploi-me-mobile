import React, { useState, createContext } from 'react';

const UserContext = createContext()
const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ email: "the mail"  })

    return (
        <UserContext.Provider
            value={{
                user,
                setUser
            }}>
            {children}

        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };


