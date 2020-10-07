const axios = require('axios');

//Api call function
const apiCall = {
  async getUser(userResponses) {
    try { let response = await axios
        
      // Sample URL: https://api.github.com/users/CJack74
        .get(`https://api.github.com/users/${userResponses.username}`);
        return response.data;

      } catch (error) {
        console.log(error);
      }
  }
};

module.exports = apiCall;

// (async () => {
//     let response = await fetch('/article/promise-chaining/user.json');
//     let user = await response.json();
//     ...
//   })();