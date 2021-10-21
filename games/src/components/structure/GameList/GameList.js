import React, {useState, useEffect}from 'react'
import {Api} from '../../../api/Api'
import GameCard from "../GameCard/GameCard"
import { Link } from "react-router-dom";


export default function GameList() {
    const [games, setGames] = useState([])
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
            <Link to={"/game/create"}><button type="button">Add Game</button></Link>
            {games.map((game, index) => (
                <GameCard
                    key={index}
                    game={game}
                    />
            ))}
        
        </div>
    );
};

