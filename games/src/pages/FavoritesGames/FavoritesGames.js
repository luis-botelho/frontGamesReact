import React, { useState, useEffect } from "react";
import { Api } from "../../api/Api";
import { Link } from "react-router-dom";


export default function FavoritesGames() {
  const [games, setGames] = useState([]);
  const id = +localStorage.getItem("profile");
  useEffect(() => {
    const loadGameList = async () => {
      const response = await Api.getRequest(
        Api.url("/profiles/profile/", id),
        true
      );
      const results = await response.json();
      setGames(results.games);
    };
    loadGameList();
  }, []);
  const stars = [];
  for (var i = 0; i < games.IMDB; i++) {
    stars.push(1);
  }

  return (
    <div>
      {games.map((game, index) => (
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
          <Link to={"/game/add"}>
            <button type="button">Add Game</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
