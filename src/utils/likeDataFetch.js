import axiosInstance from '../axios/axiosConfig';

const toggleVideoLike = async (videoId) => {
  try {
    const response = await axiosInstance.get(`/like/toggleVideoLike/${videoId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error toggling video like:', error);
  }
};

const toggleCommentLike = async (commentId) => {
  try {
    const response = await axiosInstance.get(`/like/toggleCommentLike/${commentId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error toggling comment like:', error);
  }
};

const toggleTweetLike = async (tweetId) => {
  try {
    const response = await axiosInstance.get(`/like/toggleTweetLike/${tweetId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error toggling tweet like:', error);
  }
};

const getLikedVideos = async () => {
  try {
    const response = await axiosInstance.get('/like/getLikedVideos');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching liked videos:', error);
  }
};

const getLikesOfVideoById = async (videoId) => {
  try {
    const response = await axiosInstance.get(`/like/getLikesOfVideoById/${videoId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching likes of the video:', error);
  }
};

const getLikesOfCommentById = async (commentId) => {
  try {
    const response = await axiosInstance.get(`/like/getLikesOfCommentById/${commentId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching likes of the comment:', error);
  }
};

const getLikesOfTweetById = async (tweetId) => {
  try {
    const response = await axiosInstance.get(`/like/getLikesOfTweetById/${tweetId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching likes of the tweet:', error);
  }
};

export {
  toggleVideoLike,
  toggleCommentLike,
  toggleTweetLike,
  getLikedVideos,
  getLikesOfVideoById,
  getLikesOfCommentById,
  getLikesOfTweetById,
};
