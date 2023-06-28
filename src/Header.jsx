import { LogoutLink } from "./LogoutLink"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <header className="container">
      <nav>
       <Link to="/">Home</Link> | <Link to="/login">login</Link> | <LogoutLink />
      </nav>
    </header>
  )
}