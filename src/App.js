import React, { Component } from 'react'
import ComponentC from './components/ComponentC'
import { UserProvider } from './components/userContext'

 class App extends Component {
  render() {
    return (
      <div>
          <UserProvider value="Aditya"> 
              <ComponentC/>
          </UserProvider>
      </div>
    )
  }
}


export default App
//https://academind.com/learn/react/redux-vs-context-api/
// can send json in userprovider like value={{name:"Aditya","age":23}}



