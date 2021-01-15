import axios from 'axios';

import { gameDetailsURL, gameScreenshotURL } from "../api";

export const loadDetails = (id) => async (dispatch) =>{

    dispatch({
        type: "LOADING_DETAILS"
    })

    const gameDescription = await axios.get(gameDetailsURL(id))
    const screenShotData = await axios.get(gameScreenshotURL(id));

    dispatch({
        type: "GET_DETAILS",
        payload: {
            game:  gameDescription.data,
            screen: screenShotData.data
        }
    })
}

