// import React, { Component } from "react";
// import firebase from "firebase";
// import fire from "../Fire";
// import { Redirect } from "react-router-dom";
// var provider = new firebase.auth.GoogleAuthProvider();
// fire
//   .auth()
//   .signInWithPopup(provider)
//   .then(function(result) {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = result.credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
//     // ...
//   })
//   .catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//   });

// let jk = () => {
//   fire.auth().signInWithRedirect(provider);
// };

// class SignUp extends Component {
//   state = { logged: false, url: "/" };
//   componentDidMount() {
//     fire.auth().onAuthStateChanged(user => {
//       console.log ("User signed in: ", JSON.stringify(user));
//       var h = false;
//       if (user) {
//         h = true;
//         this.setState({ logged: true, url: "/home" });
//       }
//     });
//   }

//   render() {
//     function U() {
//       if (this.state.logged === true) {
//         return;
//       }
//     }

//     return (
//       <div>
//         {this.U}
//         {console.log (this.state)}

//         <Redirect push to="/somewhere/else" />

//       </div>
//     );
//   }
// }

// export default SignUp;
