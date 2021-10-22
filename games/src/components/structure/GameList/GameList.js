import React, {useState, useEffect}from 'react'
import {Api} from '../../../api/Api'
import GameCard from "../GameCard/GameCard"
import { Link } from "react-router-dom";
import { JwtHandler } from '../../../jwt-handler/JwtHandler';


export default function GameList() {
    const [games, setGames] = useState([])
    const admin = JwtHandler.isAdmin()
    useEffect(() => {
        const loadGameList = async () =>{
            const response = await Api.getRequest(Api.url("/games"));
            const results = await response.json();
            setGames(results)
        }
        loadGameList();
    }, [])
    return (
        <div className="cads">
            { admin === true ?
                <Link to={"/game/create"}><button type="button">Create Game</button></Link> : null}
            {games.map((game, index) => (
                <div>
                    <GameCard
                        key={index}
                        game={game}
                        admin={admin}
                        />
                    
                </div>
            ))}
        
        </div>
    );
};

