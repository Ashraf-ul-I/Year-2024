import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import DashboardPage from './pages/DashboardPage'
import ProjectsPage from './pages/ProjectsPage'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
import CreatepostPage from './pages/CreatepostPage'
import UpdatePost from './pages/UpdatePost'
import PostPage from './pages/PostPage'

const App = () => {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignInPage />} />
        <Route path='/sign-Up' element={<SignUpPage />} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<DashboardPage />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatepostPage />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>
        <Route path='/projects' element={<ProjectsPage />} />

        <Route path='/post/:postSlug' element={<PostPage />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App