import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://worldcup-fifa22.azuremicroservices.io/';

class UserService {
  getPublicContent() {
    // return axios.get(API_URL + 'all');
    return axios.get(API_URL + 'users', { headers: authHeader() });
  }
  
  getUserBoard() {
    return axios.get(API_URL + 'users', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
