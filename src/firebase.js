import 'firebase/compat/app';
import 'firebase/compat/database';
import {initializeApp} from "firebase/app";


const firebaseConfig = {

    apiKey: "AIzaSyA4SYvwzAbEQdR3T0WEYGV344psssnjFUI",
  
    authDomain: "crud-e6b22.firebaseapp.com",
  
    projectId: "crud-e6b22",
  
    storageBucket: "crud-e6b22.appspot.com",
  
    messagingSenderId: "801789639723",
  
    appId: "1:801789639723:web:742c2c3586b8075b07fe6e"
  
  };
  
  
const fireDb = firebase.initializeApp(firebaseConfig); 

export default fireDb.database().ref();

