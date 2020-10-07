const axios = require('axios');


const markDown = {
    async generateMarkdown(userResponses, userInfo) {
        console.log("inside Markdown function, userInfo paramater " + userInfo.id);
        console.log("inside Markdown function, userResponses paramater " + userResponses.username);

    }
};

module.exports = markDown;