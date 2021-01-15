import React from 'react';

import {smallImage} from "../util.js";

import styled from "styled-components";
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { loadDetails } from "../actions/gamesDetails";
import { Link } from "react-router-dom";
import { db } from "../firebase"
import firebase from "firebase"

const Game = ({ name, date, image, id }) => {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.user)
        
    const loadDetailsHandler = () => {
        document.body.style.overflow='hidden'        
        dispatch(loadDetails(id))
    };

    const likeHandler = (e) => {
        e.stopPropagation()
        const userEmail = user.email;        
        db.collection("games").get().then(snapshot => {
            const filteredDoc = snapshot.docs.map(doc=> doc.data());
            
            for (let i = 0; i< filteredDoc.length; i++) {
                if(filteredDoc[i].username === user?.email) {
                    if (filteredDoc[i].game_title !== name) {
                        // db.collection("games").add({
                        //     username: name,
                        //     game_title:
                        // })
                    } else {console.log("game already in db")}
                    // console.log(filteredDoc[i].game_title !== name ?)
                }
            }
        })
        


        // db.collection("games").add({
        //     username: userEmail,
        //     game_title: name,
        //     timestamp: firebase.firestore.FieldValue.serverTimestamp()
        // })
    }

    return (
            <StyledGame onClick={()=> loadDetailsHandler()}> 
                <Link to={`/game/${id}`}>
                    <StyledDescription>
                        <p>{name}</p>
                        <p className="game-date">{date}</p>
                    </StyledDescription>
                    <img src={image ? smallImage(image, 640): ""} alt={name} />      
                </Link>     
                {!!user && <Test className="test" onClick={likeHandler}>like</Test>}
            </StyledGame>
    )
}

//Styling
const StyledGame = styled.div`
min-height: 30vh;
text-align: center;
box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
border-radius: 3%;
overflow: hidden;
cursor: pointer;

.game-date {
    color: gray
}

img {
    display: block;
    width: 100%;
    height: 40vh;
    object-fit: cover;
    object-position: top;
}`

const StyledDescription = styled.div`
padding: 1rem 0;
`

const Test = styled.div`
font-size: 32px;
cursor: default;
    &:hover {
        color: red;
    }
`
//

export default Game;
