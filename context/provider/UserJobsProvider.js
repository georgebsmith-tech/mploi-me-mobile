import React, { useState, createContext } from 'react';

const UserJobsContext = createContext()
const UserJobsProvider = ({ children }) => {
    const [jobs, setJobs] = useState([])

    return (
        <UserJobsContext.Provider
            value={{
                jobs,
                setJobs
            }}>
            {children}

        </UserJobsContext.Provider>
    )
}

export { UserJobsContext, UserJobsProvider };


