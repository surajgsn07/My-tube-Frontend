import axios from 'axios'
import { mainName , request} from '../constants'

const toggleSubscription = async(channelId)=>{
    try {
        const response = await axios.get(`${request}/subscription/toggleSubscription/${channelId}`);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching while toggle subscription:', error);
    }
}

const getUserChannelSubscribers = async(channelId)=>{
    try {
        const response = await axios.get(`${request}/subscription/getUserChannelSubscribers/${channelId}`);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching get user channel subscribers:', error);
    }
}

const getSubscribedChannels = async(channelId)=>{
    try {
        const response = await axios.get(`${request}/subscription/getSubscribedChannels/${channelId}`);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching get subscribed channels:', error);
    }
}

export {
    toggleSubscription,
    getUserChannelSubscribers,
    getSubscribedChannels
}