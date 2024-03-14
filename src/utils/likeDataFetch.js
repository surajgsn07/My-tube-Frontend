import axios from 'axios'
import { mainName , request , token} from '../constants'

const toggleVideoLike = async(videoId)=>{
    try {
        const response = await axios.get(`${request}/like/toggleVideoLike/${videoId}`,{ headers: { Authorization: `Bearer ${token}`}});  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching ctoggle video like:', error);
    }
}

const toggleCommentLike = async(commentId)=>{
    try {
        const response = await axios.get(`${request}/like/toggleCommentLike/${commentId}`,{ headers: { Authorization: `Bearer ${token}`}});  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching ctoggle comment like:', error);
    }
}

const toggleTweetLike = async(tweetId)=>{
    try {
        const response = await axios.get(`${request}/like/toggleTweetLike/${tweetId}`,{ headers: { Authorization: `Bearer ${token}`}});  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching toggle tweet like:', error);
    }
}

const getLikedVideos = async()=>{
    try {
        const response = await axios.get(`${request}/like/getLikedVideos`,{ headers: { Authorization: `Bearer ${token}`}});  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching getting all liked videos', error);
    }
}

const getLikesOfVideoById = async(videoId)=>{
    try {
        const response = await axios.get(`${request}/like/getLikesOfVideoById/${videoId}`,{ headers: { Authorization: `Bearer ${token}`}});  
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching getting likes of the video', error);
    }
}

const getLikesOfCommentById = async(commentId)=>{
    try {
        const response = await axios.get(`${request}/like/getLikesOfCommentById/${commentId}`,{ headers: { Authorization: `Bearer ${token}`}});  
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching getting likes of the video', error);
    }
}

const getLikesOfTweetById = async(tweetId)=>{
    try {
        // console.log(tweetId)
        const response = await axios.get(`${request}/like/getLikesOfTweetById/${tweetId}`,{ headers: { Authorization: `Bearer ${token}`}});  
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching getting likes of the video', error);
    }
}

export {
    toggleVideoLike,
    toggleCommentLike,
    toggleTweetLike,
    getLikedVideos,
    getLikesOfVideoById,
    getLikesOfCommentById,
    getLikesOfTweetById
}