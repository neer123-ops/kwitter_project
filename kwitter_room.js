// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCEJ2DPZqBSWqccBqBu9QDCJHJ6EIF2J8Y",
    authDomain: "schoolkwitter.firebaseapp.com",
    databaseURL: "https://schoolkwitter-default-rtdb.firebaseio.com",
    projectId: "schoolkwitter",
    storageBucket: "schoolkwitter.appspot.com",
    messagingSenderId: "215127543872",
    appId: "1:215127543872:web:266323c418d0ec19360fa5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class = 'room_name' id="+Room_names+"omclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
 purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" + " " + user_name + "!"

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html"
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}