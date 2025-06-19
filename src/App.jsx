import React from 'react'
import HomePage from './Pages/HomePage'
import About from './Pages/About/About'
import TeamPage from './Pages/TeamPage/TeamPage'
import Contact from './Pages/ContactPage/Contact'
import MainLayout from './Layout/MainLayout'
import ErrorPage from './Pages/ErrorPage'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
    <Routes>
            <Route path='/' element={<HomePage/>}></Route>
      <Route element={<MainLayout/>}>
      <Route path='/about' element={< About/>}></Route>
      <Route path='/team' element={<TeamPage/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='*' element={<ErrorPage/>}></Route>

      </Route>


    </Routes>
    </div>
  )
}

export default App