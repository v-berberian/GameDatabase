import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import { db } from "../firebase"
import firebase from "firebase"


const MyGames = () => {
    const {user} = useSelector(state=>state.user)
    const [myGames, setMyGames] = useState([])

    useEffect((()=> {
        db.collection("games").onSnapshot(snapshot=> {
            setMyGames(snapshot.docs.map(doc=> doc.data()))
        })
    }),[])

    const removeGame = () =>{
    db.collection("games").onSnapshot(snapshot=> console.log(snapshot))
}

        <div>{myGames.map(game=> <p style={{cursor: "pointer"}}   onClick={removeGame}>{game.game_title}</p>)}</div>
console.log(myGames.map(i=>i))
    return (
        <div>
            {user?.email}
            <p>Games you liked:</p>
            <div>{myGames.map(game=> <p style={{cursor: "pointer"}}   onClick={removeGame}>{game.game_title}</p>)}</div>
        </div>
    )
}

export default MyGames
