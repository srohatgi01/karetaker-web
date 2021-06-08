import React from 'react';
import  Container  from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent  from '@material-ui/core/CardContent';
import  Typography  from '@material-ui/core/Typography';
import firebase from 'firebase';
import fire from './firebase_config';
import Check_res from './Check_res';
import './login.css'
import Logo from "./Logo.png";
import google from "./icons/google.png";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

const Login = (props)=> {
    const classes = useStyles();
    const SignIn =() => {
        const provider = new firebase.auth.GoogleAuthProvider();
        fire.auth().signInWithPopup(provider).then((result) => {
            const token = result.credential.accessToken;
            const user = result.user;
            console.log("in function sign in")

            const data ={
                storetoken: token,
                first_name: user.displayName.split(" ")[0],
                last_name: user.displayName.split(" ")[1],
                email:user.email,
                image: user.photoURL,
                uuid:user.uid,
                phone_number:"",
                gender:"FEMALE"
            }
            localStorage.setItem('user',JSON.stringify(data));
            props.signIn(data);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
            console.log(errorMessage);
            console.log(email)
            console.log(credential)
            console.log(errorCode)

        });

    }
    return (
        // <Container components="main" maxWidth="xs"className={classes.container}>
        //     <Card>
        //         <CardContent>
        //             <Typography className={classes.title} color="textSecondary">Login With Google</Typography>
        //             <Button variant ="contained" className={classes.button} color="secondary" onClick={() => (SignIn())}>Login</Button>
        //         </CardContent>
        //     </Card>
        // </Container>
        <section className="wrapper">
            <div className="loginBox">
            <img src={Logo} className="appLogoLogin" />
            <h1 className="appNameLogin">Karetaker</h1>
            <button className="loginButton" onClick={()=>(SignIn())}><div><img src={google} className="googleLogo" /><span className="buttonText">Sign In with Google</span></div></button>
            </div>
        </section>
    )
}
const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '15%'
    },
    title: {
        fontSize: 20,
        fontWeight: 800
    },
    button: {
        margin: theme.spacing(1)
    }
}))


export default Login;
