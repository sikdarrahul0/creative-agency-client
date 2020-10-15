import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import './Login.css';
import firebaseConfig from './fireBaseConfig';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const provider = new firebase.auth.GoogleAuthProvider();
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } }

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then(result =>{
                const {email , displayName} = result.user;
                const newUser = {};
                newUser.email = email;
                newUser.displayName = displayName;
                setLoggedInUser(newUser);
                history.replace(from);
          })
          .catch(error =>{
                console.log(error.message);
          });
    }
    return (
        <div>
            <section className="login-section">
            <Link to="/home"><img className="logo-style" src="https://i.ibb.co/sCpn13V/logo.png" alt="logo"/></Link>
            <div className="login-box">
                <h3 className="font-weight-bold">Login With</h3>
                <button onClick={handleGoogleSignIn} className="signIn-btn"> <img className="google-logo" src="https://i.ibb.co/1ZLStk3/google.png" alt="google-logo"/> Continue with Google</button>
                <p>Don't have an account? <a href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp" target="_blank">Create an account</a></p>
            </div>
        </section>
        </div>
    );
};

export default Login;