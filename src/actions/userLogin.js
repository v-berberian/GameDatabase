

const userLogin = (user) => async (dispatch) =>{
    dispatch({
        type: "LOGGED_IN",
        payload: {
            user: user,
        }
        })
}

export default userLogin;

