import React, { useState, useEffect } from "react";
import { Api } from "../../../api/Api";
export default function GameView(props) {
  const [game, setGame] = useState([]);
  const id = props.match.params.id;
  console.log(id);
  useEffect(() => {
    const loadGameList = async () => {
      const response = await Api.getRequest(Api.url("/games/", id));
      const results = await response.json();
      setGame(results);
    };
    loadGameList();
  }, []);
  const stars = [];
  for (var i = 0; i < game.IMDB; i++) {
    stars.push(1);
  }

  return (
    <div>
      <p>{game.title}</p>
      {stars.map((star => <i class="fas fa-star"></i>))}
      <img src={game.cover} alt={game.title}></img>
      <p>{game.description}</p>
      <iframe src={game.gameplay} frameBorder="0" title={game.title}></iframe>
      <iframe src={game.trailer} frameBorder="0" title={game.trailer}></iframe>
      <p>{game.year}</p>
    </div>
  );
}
