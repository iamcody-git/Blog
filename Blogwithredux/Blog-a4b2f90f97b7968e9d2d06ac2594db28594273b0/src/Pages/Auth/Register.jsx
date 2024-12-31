import React, { useEffect } from "react";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../Store/authSlice";
import STATUSES from "../../Global/Status/Statuses";
import { useNavigate } from "react-router-dom";
import { setStatus } from "../../../Store/blogSlice";

const Register = () => {
  const { status } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRegister = (data) => {
    dispatch(register(data));

  };

  useEffect(()=>{
    // check the status value
    if (status === STATUSES.SUCCESS) {
      navigate("/login");
      dispatch(setStatus(null))
    } 



  }, [status])

  return (
    <>
      <Form type="Register" onSubmit={handleRegister} />
    </>
  );
};

export default Register;
