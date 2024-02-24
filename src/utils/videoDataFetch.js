import axios from 'axios'
import { mainName , request} from '../constants'

//not completed
const getAllVideos = async()=>{
    try {
        const response = await axios.post(`${request}/video/publish-video` , data);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching all videos data:', error);
    }
}

const publishVideo = async(data)=>{
    try {
        const response = await axios.post(`${request}/video/publish-video` , data);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching publish video  data:', error);
    }
}

const getAVideo = async (videoId)=>{
    try {
        const response = await axios.get(`${request}/video/v/${videoId}`);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching getting a video  data:', error);
    }
}

const updateVideo = async (videoId , data)=>{
    try {
        const response = await axios.get(`${request}/video/updateVideo/${videoId}` , data);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching updating video data:', error);
    }
}

const deleteVideo = async(videoId)=>{
    try {
        const response = await axios.get(`${request}/video/deleteVideo/${videoId}` , data);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching deleting video data:', error);
    }
}

const togglePublishStatus = async ()=>{
    try {
        const response = await axios.get(`${request}/video/togglePublishStatus/${videoId}` , data);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching while toggling publish status :', error);
    }
}

export {
  getAllVideos,
  publishVideo,
  getAVideo,
  updateVideo,
  deleteVideo,
  togglePublishStatus
}