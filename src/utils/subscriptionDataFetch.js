import axiosInstance from '../axios/axiosConfig';

const toggleSubscription = async (channelId) => {
  try {
    const response = await axiosInstance.get(`/subscription/toggleSubscription/${channelId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error while toggling subscription:', error);
  }
};

const getUserChannelSubscribers = async (channelId) => {
  try {
    const response = await axiosInstance.get(`/subscription/getUserChannelSubscribers/${channelId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching user channel subscribers:', error);
  }
};

const getSubscribedChannels = async (channelId) => {
  try {
    const response = await axiosInstance.get(`/subscription/getSubscribedChannels/${channelId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching subscribed channels:', error);
  }
};

export {
  toggleSubscription,
  getUserChannelSubscribers,
  getSubscribedChannels,
};
