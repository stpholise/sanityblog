// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Homepage from './pages/Homepage'
import BlogPost from './pages/BlogPost'
// import SinglePost from './pages/SinglePost'
import Blogs from './pages/Blogs'
import Footer from './components/Footer' 
import Aboutus from './pages/Aboutus'
import Categories from './pages/Categories'
import Author from './pages/Author'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Error from './pages/Error'
import Contact from './pages/Contact'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-white' >
      <Header />
      <Routes> 
        <Route exact 
          path='/'
          element={<Homepage />}
        />
        <Route exact 
          path='/blogs'
          element={<Blogs />}
        />
        <Route exact 
          path='/blogs/:slug'
          element={<BlogPost />}
        />
        <Route exact 
          path='/about'
          element={<Aboutus />}
        />
        <Route exact 
          path='/categories'
          element={<Categories />}
        />
        <Route exact 
          path='/categories/:id'
          element={<Categories />}
          />
        <Route exact 
          path='/author/:id'
          element={<Author />}
        />
        <Route exact 
          path='/privacypolicy'
          element={<PrivacyPolicy />}
        />
        <Route exact 
          path='/contact'
          element={<Contact />}
        />
          <Route exact 
          path='*'
          element={<Error />}
        />   
        
      </Routes>
      <Footer />
      </div>
    </>
  )
}

export default App
