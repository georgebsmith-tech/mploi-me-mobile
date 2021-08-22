import React from 'react';;

import Navigator from './routes/Navigator'

import { UserProvider } from './context/provider/UserProvider'

const App = () => {
  return (
    <UserProvider>
      <Navigator />
    </UserProvider>

  );
};


export default App

