import React from 'react'
import { AuthProvider } from './src/context/authContext'
import RootNavigation from './src/navigation'
import { Provider } from 'react-redux'
import { store } from './src/store/index'

const App = () => {
  return (
    <Provider store={store} >
      <AuthProvider>
        <RootNavigation />
      </AuthProvider>
    </Provider>
  )
}

export default App