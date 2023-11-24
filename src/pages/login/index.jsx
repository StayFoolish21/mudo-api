import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    const bodyPayload = {
      username: username,
      password: password,
    };
    axios
      .post(`https://api.mudoapi.tech/login`, bodyPayload)
      .then((res) => {
        console.log(res.data.message);
        setSuccess(res.data.massage);
      })
      .catch((err) => {
        console.log(err.response);
        setError(err.response.data.message);
      });
  };

  return (
    <div>
      <Navbar />
      {success.length ? <p>{success}</p> : null}
      {error.length ? <p>{error}</p> : null}
      <div>
        <p>ini page login</p>
        <label>Username</label>
        <input type="text" placeholder="username" onChange={handleUsername} />
        <label>Password</label>
        <input type="text" placeholder="password" onChange={handlePassword} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Login;
