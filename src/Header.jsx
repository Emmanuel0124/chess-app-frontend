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
      <div className="navbar-nav">
        <a className="nav-link" aria-current="page" href="/login">Login</a>
        <a className="nav-link" href="/signup">Signup</a>
        <LogoutLink />
      </div>
    </div>
  </div>
</nav>
    </header>
  )
}