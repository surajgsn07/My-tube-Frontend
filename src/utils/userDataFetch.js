import axiosInstance from '../axios/axiosConfig';

// User Authentication
const registerUser = async (formData) => {
  try {
    const response = await axiosInstance.post('/users/register', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error in registerUser:', error);
  }
};

const loginUser = async (formData) => {
  try {
    const response = await axiosInstance.post('/users/login', formData, {
      withCredentials: true, // Include cookies
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error in loginUser:', error);
  }
};

const logoutUser = async () => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await axiosInstance.post('/users/logout', { token }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error in logoutUser:', error);
  }
};

const refreshAccessToken = async () => {
  try {
    const token = localStorage.getItem('refreshToken');
    const response = await axiosInstance.post('/users/refreshToken', null, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error in refreshAccessToken:', error);
  }
};

// Profile and Account Management
const changePassword = async (data) => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await axiosInstance.post('/users/change-password', data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error in changePassword:', error);
  }
};

const getCurrentUser = async () => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await axiosInstance.get('/users/current-user', {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error in getCurrentUser:', error);
  }
};

const getUserById = async (userId) => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await axiosInstance.get(`/users/getUserById/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error in getUserById:', error);
  }
};

const updateAccountDetails = async (data) => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await axiosInstance.patch('/users/update-account', data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error in updateAccountDetails:', error);
  }
};

const updateUserAvatar = async (data) => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await axiosInstance.patch('/users/avatar', data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error in updateUserAvatar:', error);
  }
};

const updateCoverImage = async (data) => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await axiosInstance.patch('/users/cover-image', data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error in updateCoverImage:', error);
  }
};

// Channel and History
const getUserChannelProfile = async (username) => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await axiosInstance.get(`/users/c/${username}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error in getUserChannelProfile:', error);
  }
};

const getWatchHistory = async () => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await axiosInstance.get('/users/history', {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error in getWatchHistory:', error);
  }
};

export {
  registerUser,
  loginUser,
  logoutUser,
  changePassword,
  getCurrentUser,
  updateAccountDetails,
  updateUserAvatar,
  updateCoverImage,
  getUserChannelProfile,
  getWatchHistory,
  refreshAccessToken,
  getUserById,
};
