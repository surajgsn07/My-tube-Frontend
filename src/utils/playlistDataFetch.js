import axiosInstance from '../axios/axiosConfig';

const createPlaylist = async (data) => {
  try {
    const response = await axiosInstance.post('/playlist/createPlaylist', data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating playlist:', error);
  }
};

const getUserPlaylists = async (userId) => {
  try {
    console.log(userId);
    const response = await axiosInstance.get(`/playlist/getUserPlaylists/${userId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching user playlists:', error);
  }
};

const getPlaylistById = async (playlistId) => {
  try {
    const response = await axiosInstance.get(`/playlist/getPlaylistById/${playlistId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching playlist by ID:', error);
  }
};

const addVideoToPlaylist = async (playlistId, videoId) => {
  try {
    const response = await axiosInstance.get(`/playlist/addVideoToPlaylist/${playlistId}/${videoId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding video to playlist:', error);
  }
};

const removeVideoFromPlaylist = async (playlistId, videoId) => {
  try {
    const response = await axiosInstance.get(`/playlist/removeVideoFromPlaylist/${playlistId}/${videoId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error removing video from playlist:', error);
  }
};

const deletePlaylist = async (playlistId) => {
  try {
    const response = await axiosInstance.get(`/playlist/deletePlaylist/${playlistId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error deleting playlist:', error);
  }
};

const updatePlaylist = async (playlistId, data) => {
  try {
    const response = await axiosInstance.post(`/playlist/updatePlaylist/${playlistId}`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating playlist:', error);
  }
};

export {
  createPlaylist,
  getUserPlaylists,
  getPlaylistById,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
  deletePlaylist,
  updatePlaylist,
};
