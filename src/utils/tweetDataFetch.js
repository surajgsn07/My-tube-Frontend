import axios from 'axios'
import { mainName , request} from '../constants'

const createTweet = async(data)=>{
    try {
        const response = await axios.post(`${request}/tweets/createTweet` , data);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching create tweet data:', error);
    }
}

const getUserTweets = async(username)=>{
    try {
        const response = await axios.get(`${request}/getUserTweets/${username}`);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching getting user  tweet data:', error);
    }
}

const updateTweet = async(tweetId , data)=>{
    try {
        const response = await axios.get(`${request}/getUserTweets/${tweetId}` , data);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching updating tweet data:', error);
    }
}

const deleteTweet = async(tweetId)=>{
    try {
        const response = await axios.get(`${request}/getUserTweets/${tweetId}`);  
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching deleting   tweet data:', error);
    }
}

export {
    createTweet ,
    getUserTweets,
    updateTweet,
    deleteTweet
}