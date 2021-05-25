import axios from 'axios';
const KEY = 'AIzaSyBwEWf3oW4or2TXDV-MMeLD6C0zQ9ujEEg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});