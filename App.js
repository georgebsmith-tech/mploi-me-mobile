import React from 'react';;

import Navigator from './routes/Navigator'

import { UserProvider } from './context/provider/UserProvider'
import { UserJobsProvider } from './context/provider/UserJobsProvider';

const App = () => {
  return (
    
    <UserProvider>
      <UserJobsProvider>
        <Navigator />
      </UserJobsProvider>
    </UserProvider>

  );
};


export default App

