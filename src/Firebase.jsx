import firebase from "firebase";


const {firebaseProjectName,apiKey }= require('./config')
console.log(process.env.REACT_APP_FIREBASE_PROJECT_NAME)
const config = {
  apiKey: apiKey,
  authDomain: `${firebaseProjectName}.firebaseapp.com`,
  databaseURL: `https://${firebaseProjectName}.firebaseio.com`,
  projectId: `${firebaseProjectName}`
};
console.log("hi")

firebase.initializeApp(config);

export default firebase;