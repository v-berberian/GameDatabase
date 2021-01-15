import React from 'react'
import { useSelector } from "react-redux"

const MyGames = () => {
    const {user} = useSelector(state=>state.user)
    console.log(user.email)
    return (
        <div>
            {user.email}
            <p>Games you liked:</p>
        </div>
    )
}

export default MyGames
