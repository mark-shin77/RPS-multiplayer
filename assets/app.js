// Initialize Firebase
var config = {
    apiKey: "AIzaSyCAK53sa1v4UosvMKdWTKlJg31vVlXmrIc",
    authDomain: "rps-multiplayer-14670.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-14670.firebaseio.com",
    projectId: "rps-multiplayer-14670",
    storageBucket: "rps-multiplayer-14670.appspot.com",
    messagingSenderId: "457703207817"
    };

firebase.initializeApp(config);

//Global Variables
var database = firebase.database();
var playerName = '';
var player1_name = '';
var player2_name = '';
var player1_choice = '';
var player2_choice ='';
var infoMessage = '';
var player1_win = 0;
var player1_lose = 0;
var player2_win = 0;
var player2_lose = 0;
var turns = 1;
var timer1;
var timer2;
var gameReset = false;

$(document).ready(function(){
    


});