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
        // console.log(formData)
        const response = await axios.post(`${request}/users/logout`);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching logout data:', error);
    }
}

const changePassword = async(data)=>{
    try {
        console.log(data)
        const response = await axios.post(`${request}/users/change-password` , data);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching changePassword data:', error);
    }
}

const getCurrentUser = async ()=>{
    try {
        // console.log(formData)
        const response = await axios.get(`${request}/users/current-user`);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching getUserChannel data:', error);
    }
}

const updateAccountDetails = async(data)=>{
    try {
        console.log(data)
        const response = await axios.patch(`${request}/users/current-user` , data);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching updateAccountDetails data:', error);
    }
}

const updateUserAvatar = async (data)=>{
    try {
        console.log(data)
        const response = await axios.patch(`${request}/users/avatar` , data);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching updateUserAvatar data:', error);
    }
}

const updateCoverImage = async(data)=>{
    try {
        console.log(data)
        const response = await axios.patch(`${request}/users/cover-image` , data);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching updateCoverImage data:', error);
    }
}

const getUserChannelProfile = async(username)=>{
    try {
        console.log(username)
        const response = await axios.get(`${request}/users/c/${username}` , data);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching data of getUserChannelProfile:', error);
    }
}

const getWatchHistory = async ()=>{
    try {
        // console.log(data)
        const response = await axios.get(`${request}/users/history`);  
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
    getWatchHistory
}