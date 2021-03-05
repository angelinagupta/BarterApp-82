import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig= {
    apiKey: "AIzaSyCV9YjMbn0irZiuOj7wBmnc2ABhq779FxQ",
    authDomain: "barter-system-164ae.firebaseapp.com",
    projectId: "barter-system-164ae",
    storageBucket: "barter-system-164ae.appspot.com",
    messagingSenderId: "503795998577",
    appId: "1:503795998577:web:40f90e309389d18535a0d0"
}

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();