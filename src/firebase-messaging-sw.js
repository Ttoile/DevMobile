importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyDRRV3sQCvppCSFkEH4SPbbNoIvl6qUIR8",
    authDomain: "test-a18d4.firebaseapp.com",
    databaseURL: "https://test-a18d4.firebaseio.com",
    projectId: "test-a18d4",
    storageBucket: "test-a18d4.appspot.com",
    messagingSenderId: "1088644142824",
    appId: "1:1088644142824:web:62c81d3c57d4698962db5d",
    measurementId: "G-Q059P85G42"
});

const messaging = firebase.messaging();
