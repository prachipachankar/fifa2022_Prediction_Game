import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://worldcup-fifa22.azuremicroservices.io/';
const COUNTRY_FLAG_API_URL = 'https://countryflagsapi.com/png/'

class PredictionService {

  getAllPrediction() {
    return axios.get(API_URL + 'predict', { headers: authHeader() });
  }

  getAllPredictionByUser(userId) {
    return axios.get(API_URL + 'predict/user/'+userId, { headers: authHeader() });
  }

  postPrediction(userId,matchId,prediction) {
    var payload= {prediction: this.getObjectByMatchId(prediction,matchId)[0]}
    return axios.post(API_URL + 'predict/user/'+userId+'/match/'+matchId, payload,{ headers: authHeader() });
  }

  getObjectByMatchId(array, matchId) {
    return array.map((prediction) => {
      return prediction[matchId] ? prediction[matchId] : 0;
    })
  }

  getFlagImgByCountryName(countryName){
    return axios.get(COUNTRY_FLAG_API_URL + countryName);
  }
}

export default new PredictionService();
