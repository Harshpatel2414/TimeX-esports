import React, { createContext } from 'react'

export const TeamContext = createContext({});

const TeamContextProvider = ({children}) => {
  
  return (
    <TeamContext.Provider value={}>
      {children}
    </TeamContext.Provider>
  )
}

export default TeamContextProvider
