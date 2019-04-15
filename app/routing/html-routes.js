console.log('HTML Route Connected!!');


// Node Dependencies
var path = require('path');


// Includes Two Routes
function htmlRoutes(app) {

  // This is the GET Route to /survey which leads to survey page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  // This is the Use Route which gets to the default home page
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });

}


// Export for use in main server.js file
module.exports = htmlRoutes;