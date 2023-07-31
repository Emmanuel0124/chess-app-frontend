import { LogoutLink } from "./LogoutLink"
import { Link } from "react-router-dom"
import "./Header.css";
import "bootstrap/dist/css/bootstrap.css";

export function Header() {
  return (
    <header className="header-container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Check Mates</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="dropdown" >
        <button className="dropbtn">user info</button>
      <div className="dropdown-content">
        <a className="nav-link" aria-current="page" href="/login">Login</a>
        <a className="nav-link" href="/signup">Signup</a>
        <hr/>
        <LogoutLink />
      </div>
      </div>
      <a className="nav-link" href="/gamenew">Post your game!</a>
    </div>
  </div>
</nav>
    </header>
  )
}