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

    // connectionsRef references a specific location in our database.
    // All of our connections will be stored in this directory.
    var connectionsRef = database.ref("/connections");

    // '.info/connected' is a special location provided by Firebase that is updated
    // every time the client's connection state changes.
    // '.info/connected' is a boolean value, true if the client is connected and false if they are not.
    var connectedRef = database.ref(".info/connected");

    // When the client's connection state changes...
    connectedRef.on("value", function(snap) {

    // If they are connected..
    if (snap.val()) {

    // Add user to the connections list.
    var con = connectionsRef.push(true);
    // Remove user from the connection list when they disconnect.
    con.onDisconnect().remove();
     }
    });

// When first loaded or when the connections list changes...
connectionsRef.on("value", function(snap) {

  // Display the viewer count in the html.
  // The number of online users is the number of children in the connections list.
  $("#info").text(snap.numChildren());
});

    //Attach listener to database
    database.ref().on('value', function(snapshot){
        // Check for player1
        // if (snapshot.child("player1").exists()){
        //     console.log('player 1 entered');
        // }
        console.log('hello');
    })


});