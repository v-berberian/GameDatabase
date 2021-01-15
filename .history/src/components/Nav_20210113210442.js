import React, { useState } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { fetchSearched } from "../actions/gamesAction";
import {useDispatch, useSelector} from "react-redux"
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

const Nav = ({ setModalIsOpen }) => {

    //Redux
    const dispatch = useDispatch() 

    //State
    const {searched} = useSelector(state => state.games)
    const {user} = useSelector(state=>state.user)
    const [input, setInput] = useState("")
    
    //Handlers
    const inputHandler = (e) => {
        setInput(e.target.value) 
    }
    const submitSearch = (e) => {
        e.preventDefault()
       if (input.length > 0) { 
        dispatch(fetchSearched(input))
        setInput("");
       }
    }
    const openModalHanler = () => {
        document.body.style.overflow='hidden';
        setModalIsOpen(true)
    }

    return (
        <StyledNav>
            {/* <Heading>
                {!user ? (<div onClick={openModalHanler}>login</div>):
                 (<>
                <Link to={`/mygames`}>
                     <div>my games</div>
                 </Link>
                 <div onClick={openModalHanler}>{user.email}</div>
                 </>
                 )}
            </Heading> */}
            <form onSubmit={submitSearch}>
                <input type="text" onChange={inputHandler} value={input} className="input-large" placeholder="search"/> 
                 <button type="submit"><SearchIcon/> </button>
            </form>
            {/* <form className="form-small">
            <input type="text" onChange={inputHandler} value={input} className="input-small"/>
            </form> */}
            {searched && searched.length === 0 ? (<NotFound>
                {/* {searched && searched.length === 0 ? "game is not found": "" } */}
                 game is not found
            </NotFound>):""}
        </StyledNav>
    )
}

const StyledNav = styled(motion.nav)`


  /* padding: 3rem 5rem; */
  /* text-align: center; */
  display:flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  .input-large {
    width: 30%;
    font-size: 1.5rem;
    border: aliceblue 1px solid;
    padding: 0.5rem;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    &:focus {
        outline: none
    }
  }

  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    width: 32px;
    
    &:focus {
        outline: none
    }
    &:active {
        background-color: #ff4747
    }
  }
`;

const Heading = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`

const NotFound = styled(motion.div)`
margin-top: 48px;
font-size: 48px;
color: red;
`

export default Nav;