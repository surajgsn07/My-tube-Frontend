import axiosInstance from '../axios/axiosConfig';

const getChannelStats = async () => {
  try {
    const response = await axiosInstance.post('/dashboard/getChannelStats');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching channel stats:', error);
  }
};

const getChannelVideos = async () => {
  try {
    const response = await axiosInstance.post('/dashboard/getChannelVideos');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching channel videos:', error);
  }
};

export {
  getChannelStats,
  getChannelVideos,
};
