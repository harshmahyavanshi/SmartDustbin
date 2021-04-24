const dotenv = require('dotenv');
dotenv.config();
console.log( process.env.REACT_APP_FIREBASE_PROJECT_NAME+" "+process.env.REACT_APP_APIKEY)
module.exports = {
firebaseProjectName: process.env.REACT_APP_FIREBASE_PROJECT_NAME,
apiKey: process.env.REACT_APP_APIKEY,

};