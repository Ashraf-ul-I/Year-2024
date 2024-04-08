import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import DashboardPage from './pages/DashboardPage'
import ProjectsPage from './pages/ProjectsPage'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignInPage />} />
        <Route path='/sign-Up' element={<SignUpPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App