import React, { useEffect } from "react";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import STATUSES from "../../Global/Status/Statuses";
import { login } from "../../../Store/authSlice";
import { setStatus } from "../../../Store/blogSlice";

const Login = () => {
  const {user, status} = useSelector((state)=>state.auth)
 
  const naviagte = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (data) => {
    dispatch(login(data));
  };

  useEffect(()=>{
        // check the status value
        if (status === STATUSES.SUCCESS) {
          naviagte("/");
          dispatch(setStatus(null))
        } 

  },[status])
  
  return (
    <>
      <Form type="Login" user={user} onSubmit={handleLogin} />
    </>
  );
};

export default Login;
