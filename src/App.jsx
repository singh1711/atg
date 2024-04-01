import React from 'react'
import Home from './Components/Home'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Login from './Components/Login'

function App() {
  return (
    <div>
      <Home/>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App