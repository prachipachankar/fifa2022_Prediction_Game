export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    return { 'Authorization': 'Bearer ' + user.token, 'Access-Control-Allow-Origin': '*' }; // for Spring Boot back-end
    // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
  } else {
    return {};
  }
}
