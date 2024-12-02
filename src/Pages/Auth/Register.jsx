import React from "react";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../config";

const Register = () => {
  const navigate = useNavigate();
  const handleRegister = async (data) => {
    try {
      const response = await axios.post(
        `${baseURL}/register`,
        data
      );
      if (response.status === 201) {
        navigate("/login");
      } else {
        alert("failed to register");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };

  return (
    <>
      <Form type="Register" onSubmit={handleRegister} />
    </>
  );
};

export default Register;
