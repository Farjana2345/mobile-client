import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import mb from '../../../images/mobile.jpg'
const Login = () => {
    const[loggedInUser,setLoggedInUser]=useContext(UserContext)
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };
 
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
    const handleGoogleSignIn=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
            const{displayName,email,photoURL} = result.user;
            console.log(result.user);
            const signedInUser={name:displayName,email,photoURL};
            setLoggedInUser(signedInUser);
            history.replace(from);
            }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    }
    return (
        <div className="container-fluid">
           
            <div className="login-area text-center">
            <div className="mt-5 pt-5">
                <Link class="navbar-brand" to="/"><img style={{width:'80px',height:'70px'}} src={mb} alt=""/></Link>
            </div>
             
             <h4 className="mt-5 pt-5">Login With</h4>
             <button className="mt-3 text-success " style={{padding:'10px 100px',borderRadius:'20px',border:'none',fontWeight:'bold'}} onClick={handleGoogleSignIn}>Google Sign In</button> 
            </div>
        </div>
    );
};

export default Login;