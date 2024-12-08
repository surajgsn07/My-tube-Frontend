import axiosInstance from "../axios/axiosConfig"; // Assuming you have axiosInstance set up
import { mainName, token } from "../constants";

const getAllVideos = async ({ p, l, q, sb, st, u }) => {
  try {
    const query = q || null;
    const page = p || 1;
    const limit = l || 2;
    const sortBy = sb || null;
    const sortType = st || null;
    const userId = u || null;

    const token = localStorage.getItem("accessToken");
    console.log(token);

    const response = await axiosInstance.get("/video/getAllVideos", {
      params: { page, limit, query, sortBy, sortType, userId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching all videos data:", error);
  }
};

const publishVideo = async (data) => {
  try {
    const response = await axiosInstance.post("/video/publish-video", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching publish video data:", error);
  }
};

const getAVideo = async (videoId) => {
  try {
    const response = await axiosInstance.get(`/video/v/${videoId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching a video data:", error);
  }
};

const updateVideo = async (videoId, data) => {
  try {
    const response = await axiosInstance.post(`/video/updateVideo/${videoId}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching updated video data:", error);
  }
};

const deleteVideo = async (videoId) => {
  try {
    const response = await axiosInstance.delete(`/video/deleteVideo/${videoId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching deleted video data:", error);
  }
};

const togglePublishStatus = async (videoId) => {
  try {
    const response = await axiosInstance.post(`/video/togglePublishStatus/${videoId}`, null, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error toggling publish status:", error);
  }
};

const getAllVideosByUserId = async (userId) => {
  try {
    const response = await axiosInstance.get(`/video/getAllVideosByUserId/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching all videos by user ID:", error);
  }
};

const updateThumbnail = async (videoId, data) => {
  try {
    const response = await axiosInstance.post(`/video/updateThumbnail/${videoId}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating thumbnail data:", error);
  }
};

const incrementView = async (videoId) => {
  try {
    const response = await axiosInstance.post(`/video/incrementView/${videoId}`, null, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error incrementing view:", error);
  }
};

const searchVideos = async (data) => {
  try {
    const response = await axiosInstance.post("/video/searchVideos", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error searching videos:", error);
  }
};

export {
  getAllVideos,
  publishVideo,
  getAVideo,
  updateVideo,
  deleteVideo,
  togglePublishStatus,
  getAllVideosByUserId,
  updateThumbnail,
  incrementView,
  searchVideos,
};
