import './App.css'
import { MainContextProvider } from './store'
import { RouterProvider } from 'react-router-dom'
import router from './router'

function App() {

  return (
    <>
      <MainContextProvider>
        <RouterProvider router={router} />
      </MainContextProvider>
    </>
  )
}

export default App
