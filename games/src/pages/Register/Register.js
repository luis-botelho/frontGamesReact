import React from "react";
import { Api } from "../../api/Api";
export default function Register(props) {
  const heandleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const lastName = event.target.lastname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const cpf = event.target.cpf.value;

    const payload = {
      name,
      lastName,
      email,
      password,
      cpf,
    };
    const response = await Api.postRequest(Api.url("/users"), payload, true);
    const body = await response.json();
    if(response.status === 201){
        const id = body.id;
        props.history.push(`/product/view/${id}`)
    }else {
        window.alert(response.status)
    }
  };

  return (
    <div>
      <form onSubmit={heandleSubmit}>
        <input type="text" name="name" id="name" placeholder="name" required="required"></input>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
         required="required"></input>
        <input type="text" name="email" id="email" placeholder="email" required="required"></input>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
         required="required"></input>
        <input type="text" name="cpf" id="cpf" placeholder="cpf" required="required"></input>
        <input type="submit" />
      </form>
    </div>
  );
}
