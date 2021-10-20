import React, {useState, useEffect}from 'react'
import {Api} from '../../../api/Api'
import GameCard from "../GameCard/GameCard"


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
            {games.map((game, index) => (
                <GameCard
                    key={index}
                    game={game}
                    />
            ))}
            
        </div>
    );
};

