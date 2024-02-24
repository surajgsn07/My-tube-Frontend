import axios from 'axios'
import { mainName , request} from '../constants'


const getVideoComments = async(videoId , params)=>{
    try {
        const response = await axios.post(`${request}/comment/getVideoComments/${videoId}` ,{
            params: params,
          });  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching getting video comments', error);
    }
}

const addComment = async(videoId , data)=>{
    try {
        const response = await axios.post(`${request}/comment/addComment/${videoId}` ,data);  
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching adding comment', error);
    }
}

const updateComment = async(commentId , data)=>{
    try {
        const response = await axios.post(`${request}/comment/updateComment/${commentId}` ,data);  
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching updating comment', error);
    }
}

const deleteComment = async()=>{
    try {
        const response = await axios.post(`${request}/comment/deleteComment/${commentId}`);  
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