import React, { useState, useEffect } from "react";
import { Api } from "../../api/Api";
import { Link } from "react-router-dom";

export default function GameView(props) {
  const [game, setGame] = useState([]);
  const [gamesOnprofile, setGamesOnProfile] = useState([]);
  const gameId = props.match.params.id;
  const profileId = +localStorage.getItem("profile");
  useEffect(() => {
    const loadGameList = async () => {
      const response = await Api.getRequest(Api.url("/games/", gameId));
      const results = await response.json();
      setGame(results);
    };
    loadGameList();
  }, []);

  useEffect(() => {
    const loadGamesOnProfile = async () => {
      const response = await Api.getRequest(
        Api.url("/profiles/profile/", profileId),
        true
      );
      const result = await response.json();
      setGamesOnProfile(result.games);
    };
    loadGamesOnProfile();
    
  }, []);

  
  const gameToProfile = async () => {
    const response = await Api.patchRequest(
      Api.url("/profiles/", profileId),
      true
    );
  };


  const stars = [];
  for (var i = 0; i < game.IMDB; i++) {
    stars.push(1);
  }

  return (
    <div>
      <h1>{game.title}</h1>
      {stars.map((star) => (
        <i class="fas fa-star"></i>
      ))}
      <img src={game.cover} alt={game.title}></img>
      <p>{game.description}</p>
      <iframe
        width="560"
        height="315"
        src={game.gameplay}
        title={game.title + "Game Play"}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src={game.trailer}
        title={game.title + "Game Trailer"}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p>{game.year}</p>

      
      <button type="button">Add Game</button>
    </div>
  );
}
// <iframe width="560" height="315" src="https://www.youtube.com/embed/mw1-ndQ-AUw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
