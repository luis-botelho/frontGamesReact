import React, { useState } from "react";
import { useHistory } from "react-router";

export default function GameCard({ game }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/game/view/${game.id}`);
  };

  const stars = [];
  for (var i = 0; i < game.IMDB; i++) {
    stars.push(1);
  }

  return (
    <div className="card" onClick={handleClick}>
      <div className="card__title">
        <h1>{game.title}</h1>
        <img src={game.cover} alt={game.title} />
        <p>{game.description}</p>
        <p>{game.year}</p>
        {stars.map((star => <i class="fas fa-star"></i>))}
      </div>
    </div>
  );
}
