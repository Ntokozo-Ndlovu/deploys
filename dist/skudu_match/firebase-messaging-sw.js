importScripts('https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.8.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyBxK92jQdfceClVqvHJur6D2181Z-1YWk0",
    authDomain: "skudutest.firebaseapp.com",
    databaseURL: "https://skudutest.firebaseio.com",
    projectId: "skudutest",
    storageBucket: "skudutest.appspot.com",
    messagingSenderId: "519714862029",
    appId: "1:519714862029:web:058a9979c6cafed6",
    measurementId: "G-15C38FLYMS"
});


const messaging = firebase.messaging();