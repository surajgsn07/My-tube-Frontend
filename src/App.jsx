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
import { Outlet, useNavigate } from 'react-router-dom'
import { getCurrentUser, refreshAccessToken } from './utils/userDataFetch.js'
import { token } from './constants.js'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './store/authSlice.js'
import { makeToast } from './store/toastSlice.js'
import showToast from './components/ShowToast.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [refresh, setrefresh] = useState(null);
  const navigate = useNavigate()

  const r = async()=>{
    const a = await refreshAccessToken();
    setrefresh(a);
  }

  const dispatch = useDispatch();
  const user1 = useSelector((state)=>state.auth.user);
    const fetchUser = async()=>{
      const data = await getCurrentUser();
      if(!data){
        navigate('/login')
      }
      console.log(data.data);
      const user = data.data;
      console.log(user)
      const obj = {
        user
      }
      console.log(user1)
      console.log(obj)
      dispatch(login(obj));
      console.log(user1)
      navigate('/')
    }
  
    // const toastStatus = useSelector((state)=>state.toast.status);


    
    // fetchUser();
  
  useEffect(() => {
    if(token){
      fetchUser()
    }else{
      dispatch(logout());
      navigate('/login')
      
    }
  }, [])
  
  
  return (
    <>
    
    <div className='relative'>
        <div className=''><NavBar/></div>
        <Outlet/>
    </div>
    
    </>
  )
}


// ShowToast.jsx
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useSelector } from 'react-redux';

const ShowToast = () => {
  const toastStatus = useSelector((state) => state.toast.status);
  const actionName = useSelector((state) => state.toast.actionName);
  const itemName = useSelector((state) => state.toast.itemName);

  const showToast = (action, item) => {
    switch (action) {
      case 'upload':
        toast.success(`${item} uploaded successfully!`);
        break;
      case 'update':
        toast.success(`${item} updated successfully!`);
        break;
      case 'delete':
        toast.error(`${item} deleted successfully!`);
        break;
      // Add more cases for different actions as needed
      default:
        break;
    }
  };

  if (toastStatus) {
    showToast(actionName, itemName);
  }

  return <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />;
};


export default App
