import axios from 'axios'
import { mainName , request , token} from '../constants'


const getVideoComments = async(videoId , params)=>{
    try {
        const response = await axios.get(`${request}/comment/getVideoComments/${videoId}`);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching getting video comments', error);
    }
}

const addComment = async(videoId , data)=>{
    try {
        const body = {
            ...data,
            headers: { Authorization: `Bearer ${token}`}
        }
        console.log(body)
        const response = await axios.post(`${request}/comment/addComment/${videoId}` ,data , {headers: { Authorization: `Bearer ${token}`}});  
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching adding comment', error);
    }
}

const updateComment = async(commentId , data)=>{
    try {
        const response = await axios.post(`${request}/comment/updateComment/${commentId}` ,data ,{ headers: { Authorization: `Bearer ${token}`}});  
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching updating comment', error);
    }
}

const deleteComment = async()=>{
    try {
        const response = await axios.post(`${request}/comment/deleteComment/${commentId}`,{ headers: { Authorization: `Bearer ${token}`}});  
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching deleting comment', error);
    }
}

export {
    getVideoComments,
    addComment,
    updateComment,
    deleteComment
}