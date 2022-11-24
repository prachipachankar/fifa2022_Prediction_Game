import axios from "axios";

const API_URL = "https://worldcup-fifa22.azuremicroservices.io/users/";

class AuthService {
  login(username, password) {
    const headers = {
      username,
      password,
      // 'Content-Type': 'application/json;charset=UTF-8',
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
      // 'Access-Control-Allow-Headers': '*'
      'Access-Control-Expose-Headers': 'token'
  };
    return axios
      .post(API_URL + "login",{},{ headers: headers})
      .then(response => {
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(email, firstname, lastname, teamname, password) {
    return axios.post(API_URL + "signup", {
      email,
      firstname,
      lastname,
      teamname,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
