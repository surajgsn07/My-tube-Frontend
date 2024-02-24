import axios from 'axios'
import { mainName , request} from '../constants'

const toggleVideoLike = async(videoId)=>{
    try {
        const response = await axios.get(`${request}/like/toggleVideoLike/${videoId}`);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching ctoggle video like:', error);
    }
}

const toggleCommentLike = async(commentId)=>{
    try {
        const response = await axios.get(`${request}/like/toggleCommentLike/${commentId}`);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching ctoggle comment like:', error);
    }
}

const toggleTweetLike = async(tweetId)=>{
    try {
        const response = await axios.get(`${request}/like/toggleTweetLike/${tweetId}`);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching toggle tweet like:', error);
    }
}

const getLikedVideos = async()=>{
    try {
        const response = await axios.get(`${request}/like/getLikedVideos`);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching getting all liked videos', error);
    }
}

export {
    toggleVideoLike,
    toggleCommentLike,
    toggleTweetLike,
    getLikedVideos
}