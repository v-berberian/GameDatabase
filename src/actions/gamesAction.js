import axios from 'axios'

import { popularGamesURL } from "../api";
import { upcomingGamesURL } from "../api";
import { newGamesURL } from "../api";
import { searchGameURL } from "../api";

// because of thunk we do two arrow functions

export const loadGames = () => async (dispatch) => {
    const popularGamesData = await axios.get(popularGamesURL());
    const upcomingGameData = await axios.get(upcomingGamesURL());
    const newGamesData = await axios.get(newGamesURL());

    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularGamesData.data.results,
            upcoming: upcomingGameData.data.results,
            newGames: newGamesData.data.results,
          },
    })
}

export const fetchSearched = (game_name) => async (dispatch) => {
    const searchedGameData = await axios.get(searchGameURL(game_name));

    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: searchedGameData.data.results
        }
    })
}


