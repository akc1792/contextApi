import React from 'react'

const UserContext = React.createContext('Context APIs') // default value here in createContext function like 'Context APIs'
// export default React.createContext({})

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}
export default UserContext