import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import { db } from "../firebase"
import firebase from "firebase"


const MyGames = () => {
    const {user} = useSelector(state=>state.user)
    const [myGames, setMyGames] = useState([])

    

    const removeGame = () =>{
console.log("test")
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
