import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Videocard from './components/Videocard'
import Sidebar from './components/Sidebar'
import NavBar from './components/NavBar'
import Button from './components/Button'
import Home from './pages/Home'
import Bottombar from './components/Bottombar'
import Video from './components/Video'
import SideList from './components/SideList'
import Comment from './components/Comment'
import CommentList from './components/CommentList'
import VideoPage from './pages/VideoPage.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    
    <div className='relative'>
        <div className=''><NavBar/></div>
        <Outlet/>
    </div>
    
    </>
  )
}

export default App
