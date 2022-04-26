// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1NG-7MnePm3I9TSUyBjFh3TTaH3ksWWg",
  authDomain: "pro93-10fcc.firebaseapp.com",
  projectId: "pro93-10fcc",
  storageBucket: "pro93-10fcc.appspot.com",
  messagingSenderId: "67384169756",
  appId: "1:67384169756:web:94187d3bf42fffa1c716d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding_room_name"
    });

    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("roomname-"+Room_names);
 row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+=row;
 //End code
 });});}
getData();


function redirectToRoomName(name){
 console.log(name);
 localStorage.setItem("room_name",name);
 window.location="kwitter_page.html";
}

function logout(){
 localStorage.removeItem("user_name");
 localStorage.removeItem("user_name");
 window.location="index.html";
}

