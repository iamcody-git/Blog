import React, { useEffect, useState } from "react";
import Layout from "../../Global/Layout/Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../config";

const SingleBlog = () => {
  const {id} = useParams()
  const [blog, setBlogs] = useState({})
   const fetchBlog = async ()=>{
    const response = await axios.get(`${baseURL}/blog/${id}`)
    if(response.status === 200){
      setBlogs(response.data.data)
    }

  }

  const navigate = useNavigate()
  const deleteBlog = async ()=>{
    try {
      const response = await axios.delete(`${baseURL}/blog/${id}`,{
        headers:{
          'Authorization' : localStorage.getItem('token')
        }
      })
      if(response.status === 200){
       navigate('/')
      }else{
        alert("sth went wrong")
      }
  
    } catch (error) {
      alert(error?.response?.data?.data)
      
    }

  useEffect(()=>{
    fetchBlog()
  })
}
  return (
    <>
    <Layout>
      <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
          <img
            src={blog.image}
            alt="card-image"
          />
        </div>
        <div className="p-4">
          <h6 className="mb-2 text-slate-800 text-xl font-semibold">
            {blog?.title}
          </h6>
          <p className="text-slate-600 leading-normal font-light">
            {blog?.description}
          </p>
        </div>
        <div className="px-4 pb-4 pt-0 mt-2">
          <Link to={'/blog/add'}>
          <button
            className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            
            EDIT
          </button>
          </Link>

          <button
            className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={deleteBlog}
          >
            Delete
          </button>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default SingleBlog;
