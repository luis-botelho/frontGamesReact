import React from "react";
import { useHistory } from "react-router";


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
    <div className="card" >
      <div className="card__title"onClick={()=>handleClick("view")}>
        <h1>{game.title}</h1>
        <img src={game.cover} alt={game.title} />
        <p>{game.description}</p>
        <p>{game.year}</p>
        {stars.map((star => <i class="fas fa-star"></i>))}
      </div>
      {admin === true ? <div>
        <button type="button" onClick={() => handleClick('delete')}>Delete</button>
        <button type="button" onClick={() => handleClick('edit')}>Edit</button>
      </div> : null }

      
    </div>
  );
}
