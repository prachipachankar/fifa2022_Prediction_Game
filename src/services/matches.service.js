import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://worldcup-fifa22.azuremicroservices.io/';
const COUNTRY_FLAG_API_URL = 'https://countryflagsapi.com/png/'

class MatchService {

  getAllMatches() {
    // return axios.get(API_URL + 'all');
    return axios.get(API_URL + 'match', { headers: authHeader() });
  }

  getAllCurrentMatches() {
    // return axios.get(API_URL + 'all');
    return axios.get(API_URL + 'match/current', { headers: authHeader() });
    // return [
    //     {
    //       "matchId": 101,
    //       "team_A": "Qatar",
    //       "team_B": "Ecuador",
    //       "matchTs": "2022-11-20T16:00:00",
    //       "result": null,
    //       "points": 10,
    //       "predictions": [
    //         {
    //           "predictionId": 17,
    //           "user": {
    //             "userId": 4,
    //             "email": "ankitech@gmail.com",
    //             "password": "6565656",
    //             "fname": "kumar",
    //             "lname": "ankit",
    //             "team": null,
    //             "totalPoints": 0
    //           },
    //           "prediction": 1,
    //           "pointPerMatch": null
    //         }
    //       ]
    //     },
    //     {
    //       "matchId": 102,
    //       "team_A": "England",
    //       "team_B": "Iran",
    //       "matchTs": "2022-11-21T13:00:00",
    //       "result": null,
    //       "points": 10,
    //       "predictions": [
    //         {
    //           "predictionId": 18,
    //           "user": {
    //             "userId": 4,
    //             "email": "ankitech@gmail.com",
    //             "password": "6565656",
    //             "fname": "kumar",
    //             "lname": "ankit",
    //             "team": null,
    //             "totalPoints": 0
    //           },
    //           "prediction": 1,
    //           "pointPerMatch": null
    //         }
    //       ]
    //     },
    //     {
    //       "matchId": 103,
    //       "team_A": "Senegal",
    //       "team_B": "Netherlands",
    //       "matchTs": "2022-11-21T16:00:00",
    //       "result": null,
    //       "points": 10,
    //       "predictions": []
    //     },
    //     {
    //       "matchId": 104,
    //       "team_A": "USA",
    //       "team_B": "Wales",
    //       "matchTs": "2022-11-21T19:00:00",
    //       "result": null,
    //       "points": 10,
    //       "predictions": []
    //     }
    //   ];
  }

  getFlagImgByCountryName(countryName){
    return axios.get(COUNTRY_FLAG_API_URL + countryName);
  }
}

export default new MatchService();
