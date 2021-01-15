import React, { useEffect, useState } from 'react';
//Components
import GameDetail from "../components/GameDetail"
import Nav from "../components/Nav.js"
import Game from '../components/Game'
import LoginModal from '../components/LoginModal'
//Libraries
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
//Redux
import { loadGames } from '../actions/gamesAction'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom"

const Home = () => {
    const dispatch = useDispatch();

    useEffect (()=> {
    dispatch(loadGames())
    }, [dispatch]);
    
    const clearSearched = () => {
        dispatch({
            type: "CLEAR_SEARCHED"
        })
    }

    const location = useLocation();
    const gameURL = location.pathname.split("/")[2];
    //States
    const {popular, upcoming, newGames, searched} = useSelector(state => state.games)
    const [modalIsOpen, setModalIsOpen] = useState(false)


    
    return (
        <>
        <Nav setModalIsOpen={setModalIsOpen}/>
         {modalIsOpen && 
            <LoginModal 
            modalIsOpen={modalIsOpen} 
            setModalIsOpen={setModalIsOpen}
            />}
        <GameList >
            <AnimateSharedLayout type="crossfade" >
                <AnimatePresence>
                        {/* <GameDetail /> */}
                    {gameURL &&<GameDetail />}
                    {searched.length > 0 ? (
                        <SearchSection  layout initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.6}} >
                        <SearchHeading>
                            <h2>Searched Games:</h2>
                            <span onClick={clearSearched}>Clear search</span>
                        </SearchHeading>
                        <Games>
                        {searched?.map(game => 
                            <Game 
                            name={game.name} 
                            date={game.released} 
                            image={game.background_image}
                            id={game.id} 
                            key={game.id}/>
                        )}                
                        </Games>  
                        </SearchSection>): null} 
                </AnimatePresence>
                <h2>Popular Games:</h2>
                <Games layout>
                        {popular?.map(game => 
                            <Game 
                            name={game.name} 
                            date={game.released} 
                            image={game.background_image}
                            id={game.id} 
                            key={game.id}/>
                        )}                
                </Games>  
                    {/* <h2>Upcoming Games:</h2>
                    <Games>
                        {upcoming?.map(game => 
                            <Game name={game.name} 
                            date={game.released} 
                            image={game.background_image} 
                            id={game.id} 
                            key={game.id}/>
                        )}                
                </Games> */}
                {/* <h2>New Games:</h2>
                <Games>
                        {newGames?.map(game => 
                            <Game name={game.name} 
                            date={game.released} 
                            image={game.background_image}
                            id={game.id}
                            key={game.id}/>
                        )}                
                </Games> */}
           </AnimateSharedLayout>
        </GameList>
        </>
    
    )
}

//Styling
const GameList = styled(motion.div)`
color: black;
padding: 3rem;

    h2 {
    padding: 3rem 0
    }
    
    @media (max-width: 500px) {
        padding: 8px 2rem;
    }

`

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
        grid-row-gap: 2rem;
    }
`

const SearchHeading = styled(motion.div)`
display: flex;
justify-content: space-between;
align-items: center;
    span {
        cursor: pointer
    }
`
const SearchSection = styled(motion.div)`
`
export default Home