import React from 'react'
import { Route, Routes } from 'react-router-dom'

import AboutUs from './Pages/AboutUs'
import CourseList from './Pages/CoursePage/CourseList'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import PageNotFound from './Pages/PageNotFound'
import SignupPage from './Pages/SignupPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/LMS-Client" element={<HomePage />} />
        <Route path="/LMS-Client/about" element={<AboutUs />} />
        <Route path="/LMS-Client/login" element={<LoginPage />} />
        <Route path="/LMS-Client/register" element={<SignupPage />} />
        <Route path="/LMS-Client/course" element={<CourseList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
