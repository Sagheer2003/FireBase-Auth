


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";




// Your web app's Firebase configuration


  const firebaseConfig = {
    apiKey: "AIzaSyDPstJoMCpmYoEsA0g4IGh0mBuVswoh7b0",
    authDomain: "userdata--authenctication.firebaseapp.com",
    projectId: "userdata--authenctication",
    storageBucket: "userdata--authenctication.appspot.com",
    messagingSenderId: "679471008591",
    appId: "1:679471008591:web:46366faceeb3c10a1d533a"
  };


 // Initialize Firebase
 const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service


let btn = document.querySelector("#btn")
const auth = getAuth(app);
if(btn){
  btn.addEventListener("click", ()=>{

  
    let email = document.querySelector("#getemail").value
    let password = document.querySelector("#getpassword").value
    
    
    
    
    
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
      
    location.href = "./signin.html"


      
    
    
    
    
    
    })



}

let lbtn = document.querySelector("#lbtn")

if(lbtn){
  const auth = getAuth(app);
  lbtn.addEventListener("click", ()=>{

  
    let email = document.querySelector("#lgetemail").value
    let password = document.querySelector("#lgetpassword").value
    
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    
    
    
    
    
    })
    





}




