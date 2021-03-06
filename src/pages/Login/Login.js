import React from "react";
import { Api } from "../../api/Api";
import { JwtHandler } from "../../jwt-handler/JwtHandler";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login(props) {
  const handleSubmit = async (event) => {
    // Previne o comportamento padrão do submit, que no caso do form é o refresh
    event.preventDefault();

    // Obtém os dados dos inputs
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Constrói um payload com esses dados
    const payload = {
      email,
      password,
    };

    // Faz uma requisição no backend
    const response = await Api.postRequest(Api.url("/login"), payload);
    const body = await response.json();
    if (response.status === 200) {
      const accessToken = body.accessToken;
      const admin = body.admin
      JwtHandler.setJwt(accessToken);
      JwtHandler.setAdmin(admin);

      const user = await Api.getRequest(Api.url(`/users/email/${email}`),true)
      const userData = await user.json();
      const userId = userData.id
      localStorage.setItem("userId", userId);
      props.history.push(`/profiles/${userId}`);
    } else {
      // Error
    }
  };

  return (
    <div className="card-content">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label className="form__label" htmlFor="email">
            E-mail:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="text"
            id="email"
            name="email"
          />
        </div>

        <div>
          <label className="form__label" htmlFor="password">
            Password:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="password"
            id="password"
            name="password"
          />
        </div>

        <div>
          <input
            className="form__submit button--primary"
            type="submit"
            value="Login"
          />
        </div>
        <div>
          <Link to="/register">
            <p>Create a new account</p>
          </Link>
        </div>
      </form>
    </div>
  );
}
