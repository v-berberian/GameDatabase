import React, {useEffect} from 'react';
import { useSelector } from "react-redux";
import { db } from "../firebase"


const MyGames = () => {
    useEffect((()=> {
        db.collection("games").onSnapshot(snapshot=> {
            snapshot.docs.map(doc=> doc.data())
        })
    }),[])

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
