import firebase from "firebase/app";
import "firebase/storage";
var firebaseConfig = {
    apiKey: "AIzaSyBozwMYCoanFwzdANvwX-opW2Auhyxf2cs",
    authDomain: "ali-marble-6a13c.firebaseapp.com",
    databaseURL: "https://ali-marble-6a13c.firebaseio.com",
    projectId: "ali-marble-6a13c",
    storageBucket: "ali-marble-6a13c.appspot.com",
    messagingSenderId: "401746656536",
    appId: "1:401746656536:web:5069ea1b6a22dbf378326d",
    measurementId: "G-YE6WNHFCSG"

};




firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { firebase, storage as default };