import axios from "axios";
import { mainName, request, token } from "../constants";

//not completed
const getAllVideos = async ({ p, l, q, sb, st, u }) => {
  try {
    const query = q ? q : null;
    const page = p ? p : 1;
    const limit = l ? l : 2;
    const sortBy = sb ? sb : null;
    const sortType = st ? st : null;
    const userId = u ? u : null;

    const token = localStorage.getItem("accessToken");
    console.log(token);

    const response = await axios.get(
      `${request}/video/getAllVideos`,
      { param: { page, limit, query, sortBy, sortType, userId } },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response) {
      console.log(response.data);
    } else {
      console.log("yha h error kch ni aya vha se ");
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching all videos data:", error);
  }
};

const publishVideo = async (data) => {
  try {
    const response = await axios.post(`${request}/video/publish-video`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching publish video  data:", error);
  }
};

const getAVideo = async (videoId) => {
  try {
    // console.log(videoId)
    const response = await axios.get(`${request}/video/v/${videoId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching getting a video  data:", error);
  }
};

const updateVideo = async (videoId, data) => {
  try {
    
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json', // Assuming you are sending JSON data
    };
    

    
    const response = await axios.post(
      `${request}/video/updateVideo/${videoId}`,
      data,
      { headers: headers }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching updating video data:", error);
  }
};

const deleteVideo = async (videoId) => {
  try {
    const response = await axios.get(
      `${request}/video/deleteVideo/${videoId}`,
      data,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching deleting video data:", error);
  }
};

const togglePublishStatus = async () => {
  try {
    const response = await axios.get(
      `${request}/video/togglePublishStatus/${videoId}`,
      data,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching while toggling publish status :", error);
  }
};

const getAllVideosByUserId = async (userId) => {
  try {
    const token = localStorage.getItem("accessToken");
    // console.log(token);

    const response = await axios.get(
      `${request}/video/getAllVideosByUserId/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response) {
      console.log(response.data);
    } else {
      console.log("yha h error kch ni aya vha se ");
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching all videos data:", error);
  }
};


const updateThumbnail = async (videoId , data) => {
  try {
    const token = localStorage.getItem("accessToken");
    // console.log(token);

    const response = await axios.post(
      `${request}/video/updateThumbnail/${videoId}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response) {
      console.log(response.data);
    } else {
      console.log("yha h error kch ni aya vha se ");
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching updated thumbnail data:", error);
  }
};


const incrementView = async (videoId) => {
  try {
    const token = localStorage.getItem("accessToken");
    // console.log(token);

    const response = await axios.post(
      `${request}/video/incrementView/${videoId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response) {
      console.log(response.data);
    } else {
      console.log("yha h error kch ni aya vha se ");
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching updated thumbnail data:", error);
  }
};


const searchVideos = async (data) => {
  try {
    const token = localStorage.getItem("accessToken");
    // console.log(token);

    const response = await axios.post(
      `${request}/video/searchVideos`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response) {
      console.log(response.data);
    } else {
      console.log("yha h error kch ni aya vha se ");
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching updated thumbnail data:", error);
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
  searchVideos
};
