import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import { db } from "../firebase"


const MyGames = () => {
    const {user} = useSelector(state=>state.user)

    useEffect((()=> {
        db.collection("games").onSnapshot(snapshot=> {
            snapshot.docs.map(doc=> doc.data())
        })
    }),[])


    return (
        <div>
            {user.email}
            <p>Games you liked:</p>
        </div>
    )
}

export default MyGames
