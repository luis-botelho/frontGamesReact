import React from "react";
import { Api } from "../../api/Api";
import { JwtHandler } from "../../jwt-handler/JwtHandler";
export default function Register(props) {
  const heandleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const lastName = event.target.lastName.value;
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
    const login = {
      email,
      password,
    }
    const response = await Api.postRequest(Api.url("/users"), payload, true);
    const body = await response.json();
    const id = body.id;
    if(response.status === 201){
        window.alert("User successfully")
        const log = await Api.postRequest(Api.url("/login"), login);
        const data = await log.json();
        const accessToken = data.accessToken
        JwtHandler.setJwt(accessToken);
 
        props.history.push(`profile/create/${id}`)
    }else {
        window.alert(response.statusText)
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
