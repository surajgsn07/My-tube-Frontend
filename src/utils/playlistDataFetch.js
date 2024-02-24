import axios from 'axios'
import { mainName , request} from '../constants'

const createPlaylist = async(data)=>{
    try {
        const response = await axios.post(`${request}/playlist/createPlaylist` , data);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching create tweet data:', error);
    }
}

const getUserPlaylists = async(userId)=>{
    try {
        const response = await axios.get(`${request}/playlist/getUserPlaylists/${userId}`);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching create tweet data:', error);
    }
}

const getPlaylistById  = async(playlistId)=>{
    try {
        const response = await axios.get(`${request}/playlist/getPlaylistById/${playlistId}`);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching get playlist by id', error);
    }
}

const addVideoToPlaylist = async(playlistId, videoId)=>{
    try {
        const response = await axios.get(`${request}/playlist/addVideoToPlaylist/${playlistId}/${videoId}`);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching adding video to playlist', error);
    }
}

const removeVideoFromPlaylist = async(playlistId, videoId)=>{
    try {
        const response = await axios.get(`${request}/playlist/removeVideoFromPlaylist/${playlistId}/${videoId}`);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching removing video to playlist', error);
    }
}

const deletePlaylist = async(playlistId)=>{
    try {
        const response = await axios.get(`${request}/playlist/deletePlaylist/${playlistId}`);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching adeleting playlist', error);
    }
}

const updatePlaylist = async(playlistId , data)=>{
    try {
        const response = await axios.get(`${request}/playlist/updatePlaylist/${playlistId}` , data);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching updating playlist', error);
    }
}

export {
    createPlaylist,
    getUserPlaylists,
    getPlaylistById,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    deletePlaylist,
    updatePlaylist
}