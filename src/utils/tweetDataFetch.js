import axiosInstance from '../axios/axiosConfig';

const createTweet = async (data) => {
  try {
    const response = await axiosInstance.post('/tweets/createTweet', data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating tweet:', error);
  }
};

const getUserTweets = async (username) => {
  try {
    const response = await axiosInstance.get(`/tweets/getUserTweets/${username}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching user tweets:', error);
  }
};

const updateTweet = async (tweetId, data) => {
  try {
    const response = await axiosInstance.post(`/tweets/updateTweet/${tweetId}`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating tweet:', error);
  }
};

const deleteTweet = async (tweetId) => {
  try {
    const response = await axiosInstance.post(`/tweets/deleteTweet/${tweetId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error deleting tweet:', error);
  }
};

const getTweetById = async (tweetId) => {
  try {
    const response = await axiosInstance.get(`/tweets/getTweetById/${tweetId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching tweet by ID:', error);
  }
};

export {
  createTweet,
  getUserTweets,
  updateTweet,
  deleteTweet,
  getTweetById,
};
