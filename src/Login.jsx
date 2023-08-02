import axios from "axios";
import { useState } from "react";
import "./Login.css";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div className="row">
    <div className="col-sm"></div>
    <div className="col-sm"><div id="login" className="container">
      <br/>
      {errors.length > 0 && (
        <ul className="alert alert-danger">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input placeholder="Email" name="email" type="email" className="form-control" />
        </div>
        <br></br>
        <div className="form-group">
          <input placeholder="Password" name="password" type="password" className="form-control" />
        </div>
        <br></br>
        <button type="submit" className="btn btn-success">Login</button>
      </form>
    </div></div>
    <div className="col-sm"></div>
  </div>
  );
}  