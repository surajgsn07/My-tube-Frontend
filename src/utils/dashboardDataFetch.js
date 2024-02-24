import axios from 'axios'
import { mainName , request} from '../constants'

const getChannelStats = async()=>{
    try {
        const response = await axios.post(`${request}/dashboard/getChannelStats`);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching ctoggle video like:', error);
    }
}

const getChannelVideos = async()=>{
    try {
        const response = await axios.post(`${request}/dashboard/getChannelVideos`);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching ctoggle video like:', error);
    }
}

export {
    getChannelStats,
    getChannelVideos
}