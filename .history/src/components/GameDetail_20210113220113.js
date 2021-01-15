import React from 'react';
//Libraries
import styled from 'styled-components';
import { motion } from "framer-motion";
import ReactHtmlParser from 'react-html-parser'; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Router
import { useHistory } from "react-router-dom";
//Redux
import { useSelector } from 'react-redux';

const GameDetail = () => {

    const history = useHistory()

    const exitModalHandler  = (e) => {
        document.body.style.overflow='auto';
        const element = e.target;
        if (element.classList.contains('shadow')) { 
            history.push('/')
        }
    }

    const {game, screen, isLoading} = useSelector((state)=> state.details)

    if (Object.keys(game).length === 0 || Object.keys(screen).length ===0) {return null}

        return (
            <>
            { !isLoading && (
                <CardShadow className="shadow"
                 onClick={exitModalHandler}
                 initial={{opacity: 0}}
                 animate={{opacity: 1}}
                 transition={{duration: 0.3}}
                 exit={{opacity: 0}}
                 >
                    <Detail>
                        <Stats>
                            <div className="rating">
                                <h3>{game.name}</h3>
                                <p>Rating: {game.rating}</p>
                            </div>
                            <div className="info">
                                <h3>Platforms:</h3>
                                <div>
                                    {game.platforms?.map((game)=> 
                                    <span key={game.platform.id}>{game.platform.name}</span>
                                )}
                                 </div>
                            </div>
                        </Stats>
                        <Background>
                            <img src={game.background_image} alt={game.name}/>
                        </Background>
                        <Description>
                        { ReactHtmlParser (game.description) }
                            {/* {game.description} */}
                        </Description>
                        <Gallery>
                            <h3>Screenshots from the game:</h3>
                            <Slider 
                                centerMode={true}
                                lazyLoad={true}
                                dots={true}
                                swipeToSlide={true}
                                touchThreshold={100}
                                pauseOnHover={true}
                                centerPadding {"60px"}
                                slidesToShow= {3}
                          >
                                    {screen.results.map(screen => 
                                    <img 
                                        src={screen.image} 
                                        key={screen.id} 
                                        alt={screen.id}/>
                                    )}
                            </Slider>        
                        </Gallery>
                    </Detail>
                </CardShadow> 
            )}
                </>
                )
 }

//Styling 

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    background:rgba(0,0,0,0.5);
    overflow-y: scroll;
    position:fixed;
    top: 0;
    left: 0;
`

const Detail = styled(motion.div)`
    width: 80%;
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    position: absolute;
    left: 10%;

        img {
            width: 100%;
        }
`

const Stats = styled(motion.div)`
    display:flex;
    justify-content: space-between;
`

const Background = styled(motion.div)`
    margin: 2rem -32px 0 -32px;    
        img {
            width: 100%;
        }
`

const Description = styled(motion.div)`
    margin: 2rem 0;
    font-weight: lighter;
    h3 {
        text-align: center;
        color: #6d6d6d;
        margin: 8px 0
    }
`
const Gallery = styled(motion.div)`
h3 {
    margin: 2rem 0;
}
`




export default GameDetail;