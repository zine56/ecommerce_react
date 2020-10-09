import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDVqVlqZgIOLDBLchvMFdg2Ub4E6Qx2mjI",
    authDomain: "ecommerereact.firebaseapp.com",
    databaseURL: "https://ecommerereact.firebaseio.com",
    projectId: "ecommerereact",
    storageBucket: "ecommerereact.appspot.com",
    messagingSenderId: "831175992002",
    appId: "1:831175992002:web:b48d1b393c94289c2c915b"
  });

const db = firebaseApp.firestore();

export {db};
