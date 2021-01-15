import React from 'react'
import { useSelector } from "react-redux"

const MyGames = () => {
    const {user} = useSelector(state=>state.user)

    return (
        <div>
            test
        </div>
    )
}

export default MyGames
