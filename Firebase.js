import Firebase from 'firebase';
let config = {
  apiKey: "AIzaSyCA0ayM5_Ty75dsSOt3zU3DAvKdcw_UOaI",
  authDomain: "hellocrowd-57064.firebaseapp.com",
  databaseURL: "https://hellocrowd-57064.firebaseio.com",
  projectId: "hellocrowd",
  storageBucket: "hellocrowd.appspot.com",
  messagingSenderId: "378888074477"
};
let app = Firebase.initializeApp(config);  
export const db = app.database();  