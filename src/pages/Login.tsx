import "../styles/index.css";
import itmoLogo from "../assets/itmo-logo.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div id="login-card">
      <img src={itmoLogo} alt="iTMO logo" />
      <h1>Login</h1>

      <form id="formitselft">
        <div className="login-field">
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="text"
            className="field"
            id="email"
            name="email"
            placeholder="admin@gmail.com"
          />
        </div>
        <div className="login-field">
          <label htmlFor="pass">Password:</label>
          <br />
          <input
            type="password"
            className="field"
            id="pass"
            name="password"
            placeholder="password123"
          />
        </div>

        <Link to="/App">
          <input id="login-button" type="submit" value={"Log In"} />
        </Link>
      </form>
    </div>
  );
}
