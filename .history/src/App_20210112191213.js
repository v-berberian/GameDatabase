import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from 'react-redux';
import userLogin from "./actions/userLogin";

import GlobalStyles from './components/GlobalStyles';

import Home from "./pages/Home";
import MyGames from "./pages/MyGames"

import { Route } from "react-router-dom"
import {auth} from "./firebase"

function App() {
  //Auth control
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.user)

  useEffect(()=>{
      const unsubscribe = auth.onAuthStateChanged((authUser)=> {
          if (authUser) {
              dispatch(userLogin(authUser))
          } else {
              dispatch(userLogin(null))
          }
      })
      return () => {
          unsubscribe()
      }
  }, [ dispatch, user])

  return (
    <div className="App">
      <GlobalStyles />
      {/* <Route  exact path="/"> */}
      <Route exact path={["/game/:id", "/"]}>
        <Home />
      </Route>
      <Route path="/mygames">
        <MyGames/>
      </Route>
    </div>
  );
}

export default App;
