import React, {useEffect} from 'react';
import { useSelector } from "react-redux";
import { db } from "../firebase"


const MyGames = () => {

    const {user} = useSelector(state=>state.user)
    console.log(db.collection("games").docs)
    return (
        <div>
            {user.email}
            <p>Games you liked:</p>
        </div>
    )
}

export default MyGames
