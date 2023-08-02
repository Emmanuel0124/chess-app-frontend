import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="row">
    <div className="col-sm"></div>
    <div className="col-sm"><div id="signup" className="container">
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input placeholder="Name" name="name" type="text" className="form-control"/>
        </div>
        <br></br>
        <div className="form-group">
          <input placeholder="Email" name="email" type="email" className="form-control"/>
        </div>
        <br></br>
        <div className="form-group">
          <input placeholder="Password" name="password" type="password" className="form-control"/>
        </div>
        <br></br>
        <div className="form-group">
          <input placeholder="Password Confirmation" name="password_confirmation" type="password" className="form-control"/>
        </div>
        <br></br>
        <button type="submit" className="btn btn-success">Signup</button>
      </form>
    </div></div>
    <div className="col-sm"></div>
  </div>
  );
}