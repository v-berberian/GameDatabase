import React, { useRef } from 'react'
//Firebase
import firebase from "firebase";
import {auth} from "../firebase"
//Redux
import { useDispatch, useSelector } from 'react-redux';
//Libraries
import styled from "styled-components";
import { motion } from "framer-motion";



const LoginModal = ({ setModalIsOpen }) => {  
     const dispatch = useDispatch();

    //State
    const {user} = useSelector(state => state.user)
    const emailRef = useRef()
    const passwordRef = useRef()
    
    const signUpHandler = (e) => {
        e.preventDefault();
        let email = emailRef.current.value
        let password = passwordRef.current.value
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(authUser => {
            return authUser.user
        })
        .catch(error=>console.log(error))
        emailRef.current.value = " ";
        passwordRef.current.value = "";
    }

    const signInHandler = (e) => {
        e.preventDefault();
        let email = emailRef.current.value
        let password = passwordRef.current.value
        auth
        .signInWithEmailAndPassword(email, password)
        .catch(error=>console.log(error))
        emailRef.current.value = " ";
        passwordRef.current.value = "";
    }

    const signOutHandler = (e) => {
        e.preventDefault();
        dispatch({
            type: "LOGGED_OUT"
        })
        firebase.auth().signOut()
        .catch(error=>console.log(error));
    }

    const exitModalHandler  = (e) => {
        document.body.style.overflow='auto';
        const element = e.target;
        if (element.classList.contains('shadow')) { 
            setModalIsOpen(false)
        }
    }
    return (
        <CardShadow className="shadow" onClick={exitModalHandler}>
            <Container>
                {!user && (
                <>
                    <input type="email" placeholder="Email" id="txtEmail" ref={emailRef}/>
                    <input type="password" placeholder="Password" id="txtPassword" ref={passwordRef}/>
                </>)}
                {user && 
                <>
                    <p>Welcome, </p>
                    <p>{user?.email} !</p>
                </>}
                <Buttons center={user ? "center": undefined}>
                <button id="btnSignUp" onClick={signUpHandler} className={!user ? " ": "hidden"}>Signup</button>
                <button id="btnLogin" onClick={signInHandler} className={!user ? " ": "hidden"}>Login</button>
                <button id="btnLogout" onClick={signOutHandler} className={user ? " ": "hidden"}>Logout</button>
                </Buttons>
            </Container>
        </CardShadow>
    )
}

const Container = styled.form`
width: 500px;
min-height: 60vh;
background-color: white;
padding:5rem;
margin: 10rem auto;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;

    input {
        height: 40px;
        width: 100%;
        margin-bottom: 8px;
    }

    button {
        margin-bottom: 8px;
        width: 80px;
        height: 50px;
    }
`

const Buttons = styled.div`
display: flex;
width: 100%;
justify-content: ${props => props.center ? "center": "space-between"};
    .logout {
        color: red;
    }

    .hidden {
        display: none
    }
`

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    background:rgba(0,0,0,0.5);
    overflow-y: scroll;
    position:fixed;
    top: 0;
    left: 0;
`

export default LoginModal
