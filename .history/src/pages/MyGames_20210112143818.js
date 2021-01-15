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
    console.log(db.collection("games").onSnapshot(snapshot=>snapshot.docs.map(doc=> 
        console.log(doc.data().delete())))
}

console.log(removeGame())

return (
        <div>
            {user?.email}
            <p>Games you liked:</p>
            <div>{myGames.map(game=> <p style={{cursor: "pointer"}}  key={myGames.indexOf(game)} onClick={removeGame}>{game.game_title}</p>)}</div>
        </div>
    )
}

export default MyGames
