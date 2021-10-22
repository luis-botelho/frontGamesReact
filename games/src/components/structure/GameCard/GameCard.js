import React from "react";
import { useHistory } from "react-router";
import "./GameCard.css";

export default function GameCard({ game, admin }) {
  
  const history = useHistory();

  const handleClick = (path) => {
    const p = path === "view" ? "/game/view" : path === "delete" ? "/game/delete" : "/game/edit";

    history.push(`${p}/${game.id}`);
  };
  const stars = [];
  for (var i = 0; i < game.IMDB; i++) {
    stars.push(1);
  }

  return (
    <section>
      <div className="gameCard"onClick={()=>handleClick("view")}>
        <div>
          <h1>{game.title}</h1>
          <img src={game.cover} alt={game.title} />
        </div>
        <p>{game.genre}</p>
        <p>{game.description}</p>
        <p>{game.year}</p>
        {stars.map((star => <i class="fas fa-star"></i>))}
      </div>
      {admin === true ? <div>
        <button type="button" onClick={() => handleClick('delete')}>Delete</button>
        <button type="button" onClick={() => handleClick('edit')}>Edit</button>
      </div> : null }

      
    </section>
  );
}
