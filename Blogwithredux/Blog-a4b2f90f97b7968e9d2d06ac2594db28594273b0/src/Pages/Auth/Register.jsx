import React from "react";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { register } from "../../../Store/authSlice";

const Register = () => {
  const dispatch = useDispatch()
  const handleRegister = (data)=>{
    dispatch(register(data))
    
  }

  return (
    <>
      <Form type="Register" onSubmit={handleRegister}  />
    </>
  );
};

export default Register;
