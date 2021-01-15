const initState = {
    user: null
}

const loginReducer = (state = initState, action) => {
    switch(action.type) {
        case "LOGGED_IN": 
        return {
            user: action.payload.user,
            loggedIn: action.payload.loggedIn,
        };
        
        default: return {
            ...state,
        }
    }
}

export default loginReducer;