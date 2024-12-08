import axiosInstance from '../axios/axiosConfig';

const getVideoComments = async (videoId, params) => {
  try {
    const response = await axiosInstance.get(`/comment/getVideoComments/${videoId}`, { params });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching video comments:', error);
  }
};

const addComment = async (videoId, data) => {
  try {
    const response = await axiosInstance.post(`/comment/addComment/${videoId}`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding comment:', error);
  }
};

const updateComment = async (commentId, data) => {
  try {
    const response = await axiosInstance.post(`/comment/updateComment/${commentId}`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating comment:', error);
  }
};

const deleteComment = async (commentId) => {
  try {
    const response = await axiosInstance.post(`/comment/deleteComment/${commentId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error deleting comment:', error);
  }
};

export {
  getVideoComments,
  addComment,
  updateComment,
  deleteComment,
};
