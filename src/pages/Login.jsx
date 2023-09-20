import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await fetch(
      "https://smiling-pig-turtleneck.cyclic.app/api/loginpatient",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    const response = await result.json();

    if (response.user) {
      localStorage.setItem("user", JSON.stringify(response.user));
      navigate("/");
    }
  };

  return (
    <div className="signupDiv">
      <form className="signupForm" onSubmit={handleSubmit}>
        <h3>Log In</h3>
        <div className="form-group">
          <label>Email address</label>
          <input
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          LogIn
        </button>
        <p className="forgot-password text-right">
          <Link to="/login_pg">Forget Password?</Link>
        </p>
      </form>
    </div>
  );
};
export default Login;
