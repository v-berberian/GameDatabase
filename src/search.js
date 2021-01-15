import React from 'react';
import {useSelector} from "react-redux";

const Search = () => {

    const counter = useSelector(state => state.counter)

    return (
        <div>
            Search count : {counter};
        </div>
    )
}

export default Search
