import axios from 'axios';

const instance = axios.create({
   baseURL : 'https://ny-burger-app.firebaseio.com/'
});

export default instance;