import React from "react";
import { Api } from "../../api/Api";

export default function CreateGame(props) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const cover = event.target.cover.value;
    const description = event.target.description.value;
    const year = +event.target.year.value;
    const IMDB = +event.target.IMDB.value;
    const trailer = event.target.trailer.value;
    const gameplay = event.target.gameplay.value;

    const payload = {
      title,
      cover,
      description,
      year,
      IMDB,
      trailer,
      gameplay,
    };
    const response = await Api.postRequest(Api.url("/games"), payload, true);
    const body = await response.json();
    if (response.status === 201) {
      const id = body.id;
      props.history.push(`/game/view/${id}`);
    } else {
      window.alert(response.statusText);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="title"
          required="required"
        ></input>
        <input
          type="text"
          name="cover"
          id="cover"
          placeholder="cover"
          required="required"
        ></input>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="description"
          required="required"
        ></input>
        <input
          type="text"
          name="year"
          id="year"
          placeholder="year"
          required="required"
        ></input>
        <input
          type="text"
          name="IMDB"
          id="IMDB"
          placeholder="IMDB"
          required="required"
        ></input>
        <input
          type="text"
          name="trailer"
          id="trailer"
          placeholder="trailer"
          required="required"
        ></input>
        <input
          type="text"
          name="gameplay"
          id="gameplay"
          placeholder="gameplay"
          required="required"
        ></input>
        <input type="submit" />
      </form>
    </div>
  );
}
