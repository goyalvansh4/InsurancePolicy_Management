// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF_uK68JmWjblveF0auyP6eMXNnbCO3Mw",
  authDomain: "first-firebase-project-6d4cc.firebaseapp.com",
  projectId: "first-firebase-project-6d4cc",
  storageBucket: "first-firebase-project-6d4cc.appspot.com",
  messagingSenderId: "994896266087",
  appId: "1:994896266087:web:6376deb48f440f5176a5c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
//console.log(app);

  //----- New Registration code start	  
  document.getElementById("modal1").addEventListener("click", function() {
    var email =  document.getElementById("SignUp").value;
    var password = document.getElementById("signupPassword").value;
    //For new registration
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert("Registration successfully!!");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorMessage);
      alert(error);
    });		  		  
});
//----- End

//----- Login code start	  
document.getElementById("modal2").addEventListener("click", function() {
    var email =  document.getElementById("LogIn").value;
    var password = document.getElementById("LogInPassword").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert(user.email+" Login successfully!!!");
      document.getElementById('logout').style.display = 'block';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });		  		  
});
//----- End

//----- Logout code start	  
document.getElementById("logOut").addEventListener("click", function() {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('Log-out successful.');
        alert('Log-out successful.');
        document.getElementById('logOut').style.display = 'none';
      }).catch((error) => {
        // An error happened.
        console.log('An error happened.');
      });		  		  
});
//----- End