import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://worldcup-fifa22.azuremicroservices.io/';

class LeaderboardService {

  getLeaderBoard() {
    return axios.get(API_URL + 'leaderboard', { headers: authHeader() });
  }
}

export default new LeaderboardService();
