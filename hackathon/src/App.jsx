import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from './components/Main'
import Recipes from './components/Recipes'

const App = () => {
  return (
        <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Main/>} />
          <Route path="/recipes/:id" element={<Recipes/>}/>
          
          
        </Routes>
        </BrowserRouter>
  )
}

export default App