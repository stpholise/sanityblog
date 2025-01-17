// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Homepage from './pages/Homepage'
import SinglePost from './pages/SinglePost'
import Blogs from './pages/Blogs'
// import Error from './pages/Error'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div  >
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
          element={<SinglePost />}
        />
        {/* <Route exact 
          path='*'
          element={<Error />}
        />  */}
      </Routes>
      </div>
    </>
  )
}

export default App
