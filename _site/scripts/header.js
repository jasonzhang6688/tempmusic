//firebase Config
var firebaseConfig = {
    apiKey: "AIzaSyBI7SqlIECzO4-vbMOHlEREsKxAhCJZplo",
    authDomain: "musicalreddit.firebaseapp.com",
    databaseURL: "https://musicalreddit.firebaseio.com",
    projectId: "musicalreddit",
    storageBucket: "musicalreddit.appspot.com",
    messagingSenderId: "927262499011",
    appId: "1:927262499011:web:6064ff0c3879bed6704276",
    measurementId: "G-2NK17MN5QF"
  };
  //init Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();

//logout button
const logut = document.querySelector("#logout");
logout.addEventListener('click', (e) => {
    auth.signOut().then(() => {
    })
})

auth.onAuthStateChanged(user => {
    if(user) {
        console.log(user, " logged in");
    }
    else {
        console.log('user is logged out')
    }
})