import React from "react";
import { Api } from "../../api/Api";

export default function CreateProfiles(props) {
  const id = +props.match.params.id;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const image = event.target.image.value;

    const payload = {
      title,
      image,
      user: {"id":id} ,
      gamesIds: [1]
    };
    console.log(payload);
    const response = await Api.postRequest(Api.url("/profiles"), payload, true);
    console.log(JSON.stringify(payload));
    if (response.status === 201) {
      props.history.push(`/`);
    } else {
      window.alert(response.statusText);
    }
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit} >
      <input type="text" name="title" id="title" placeholder="Title" />
      <input type="text" name="image" id="image" placeholder="Image Url" />
      <input type="submit"/>
      </form>
    </div>
  );
}
