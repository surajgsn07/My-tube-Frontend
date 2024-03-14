import axios from 'axios'
import { mainName , request} from '../constants'
const registerUser = async (formData)=>{
    try {
        const response = await axios.post(`${request}/users/register` , formData , {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching reisteruser data:', error);
    }
}

const loginUser = async(formData)=>{
    try {
        console.log(formData)
        const response = await axios.post(`${request}/users/login` , formData , {
            withCredentials: true, // Include cookies
          });  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching login data:', error);
    }
}

const logoutUser = async()=>{
    try {
      const token = localStorage.getItem('accessToken');
      console.log(document.cookie.includes('accessToken'))
      // console.log(token)
        // console.log(formData)
        const response = await axios.post(`${request}/users/logout` , {token} ,{ headers: { Authorization: `Bearer ${token}`}});  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching logout data:', error);
    }
}


const refreshAccessToken = async()=>{
  try {
      const token = localStorage.getItem('refreshToken');
      // console.log(token)
      // console.log(formData)
      const response = await axios.post(`${request}/users/refreshToken`,{ headers: { Authorization: `Bearer ${token}`}});  
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching logout data:', error);
  }
}



const changePassword = async(data)=>{
    try {
        const token = localStorage.getItem('accessToken');
        console.log(data)
        const response = await axios.post(`${request}/users/change-password` , data ,{ headers: { Authorization: `Bearer ${token}`}});  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching changePassword data:', error);
    }
}

const getCurrentUser = async ()=>{
    try {
      const token = localStorage.getItem('accessToken');
        // console.log(formData)
        const response = await axios.get(`${request}/users/current-user`,{ headers: { Authorization: `Bearer ${token}`}});  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching getUserChannel data:', error);
    }
}

const getUserById = async (userId)=>{
  try {
    const token = localStorage.getItem('accessToken');
      // console.log(formData)
      const response = await axios.get(`${request}/users/getUserById/${userId}`,{ headers: { Authorization: `Bearer ${token}`}});  
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching getUserChannel data:', error);
  }
}

const updateAccountDetails = async(data)=>{
    try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.patch(`${request}/users/update-account` , data ,{ headers: { Authorization: `Bearer ${token}`}});  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching updateAccountDetails data:', error);
    }
}

const updateUserAvatar = async (data)=>{
    try {
      const token = localStorage.getItem('accessToken');
        const response = await axios.patch(`${request}/users/avatar` , data ,{ headers: { Authorization: `Bearer ${token}`}});  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching updateUserAvatar data:', error);
    }
}

const updateCoverImage = async(data)=>{
    try {
      const token = localStorage.getItem('accessToken');
        const response = await axios.patch(`${request}/users/cover-image` , data,{ headers: { Authorization: `Bearer ${token}`}});  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching updateCoverImage data:', error);
    }
}

const getUserChannelProfile = async(username)=>{
    try {
      const token = localStorage.getItem('accessToken');
        // console.log(username)
        const response = await axios.get(`${request}/users/c/${username}`,{ headers: { Authorization: `Bearer ${token}`}});  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching data of getUserChannelProfile:', error);
    }
}

const getWatchHistory = async ()=>{
    try {
        // console.log(data)
      const token = localStorage.getItem('accessToken');
        const response = await axios.get(`${request}/users/history`,{ headers: { Authorization: `Bearer ${token}`}});  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching watch history:', error);
    }
}

export {
    registerUser,
    loginUser,
    logoutUser,
    changePassword,
    getCurrentUser,
    updateAccountDetails,
    updateUserAvatar,
    updateCoverImage,
    getUserChannelProfile,
    getWatchHistory,
    refreshAccessToken,
    getUserById
}