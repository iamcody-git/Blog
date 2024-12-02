import React from "react";
import Form from "./Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../config";

const Login = () => {
  
  const navigate = useNavigate();
  const handleLogin = async (data) => {
    try {
      const response = await axios.post(
        `${baseURL}/login`,
        data
      );
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token)
        navigate("/");
      } else {
        alert("failed to login");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };
  return (
    <>
      <Form type="Login" onSubmit={handleLogin} />
    </>
  );
};

export default Login;
