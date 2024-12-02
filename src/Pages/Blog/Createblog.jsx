import React from "react";
import Form from "./Form";
import Layout from "../../Global/Layout/Layout";
import axios from "axios";
import { baseURL } from "../../config";
import { useNavigate } from "react-router-dom";

const Createblog = () => {
  const navigate = useNavigate();
  const handleCreateBlog = async (data) => {
    try {
      const response = await axios.post(`${baseURL}/blog`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.status === 201) {
        navigate("/");
      } else {
        alert("sth went wrong");
      }
    } catch (error) {
      alert(error?.response?.data?.message)
      
    }
  };
  return (
    <>
      <Layout>
        <Form type={"Create"} onSubmit={handleCreateBlog} />
      </Layout>
    </>
  );
};

export default Createblog;
