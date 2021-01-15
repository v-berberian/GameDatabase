import gamesReducer from './games';
import detailsReducer from './detailsReducer';
import loginReducer from "./loginReducer"

import { combineReducers } from 'redux';

const allReducers = combineReducers({
games: gamesReducer,
details: detailsReducer,
user: loginReducer
})

export default allReducers