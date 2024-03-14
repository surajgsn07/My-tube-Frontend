import axios from 'axios'
import { mainName , request} from '../constants'

const toggleSubscription = async(channelId)=>{
    try {
        
        const token = localStorage.getItem('accessToken');
        const response = await axios.get(`${request}/subscription/toggleSubscription/${channelId}` ,{ headers: { Authorization: `Bearer ${token}`}});  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching while toggle subscription:', error);
    }
}

const getUserChannelSubscribers = async(channelId)=>{
    try {
        
        const token = localStorage.getItem('accessToken');
        const response = await axios.get(`${request}/subscription/getUserChannelSubscribers/${channelId}`  ,{ headers: { Authorization: `Bearer ${token}`}});  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching get user channel subscribers:', error);
    }
}

const getSubscribedChannels = async(channelId)=>{
    try {
        const token = localStorage.getItem('accessToken');
        console.log(token)
        const response = await axios.get(`${request}/subscription/getSubscribedChannels/${channelId}`,{ headers: { Authorization: `Bearer ${token}`}});  
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