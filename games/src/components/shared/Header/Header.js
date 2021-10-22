import React, {useState } from "react";
import { Link } from "react-router-dom";
import { JwtHandler } from "../../../jwt-handler/JwtHandler";
import "./Header.css";

export default function Header() {
  const [isLogged, setIsLogged] = useState(JwtHandler.isJwtValid);
  const id = localStorage.getItem('userId')
  useState(() => {
    const handleOnJwtChange = () => {
      setIsLogged(JwtHandler.isJwtValid());
    };
    window.addEventListener("onJwtChange", handleOnJwtChange);
    return () => {
      window.addEventListener("onJwtChange", handleOnJwtChange);
    };
  }, []);

  return (
    <header className="header">
      <Link to="/">
        <img
          className="headerLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
          alt="Gatito loko"
        />
      </Link>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/favorites">My Games</Link></li>
          <li><Link to={`/profiles/${id}`}>Profiles</Link></li>
          <li>{
            isLogged ? (
              <Link to="/logout" className="logout">Logout</Link>
            ) : (
              <Link to="/login" className="login">Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
