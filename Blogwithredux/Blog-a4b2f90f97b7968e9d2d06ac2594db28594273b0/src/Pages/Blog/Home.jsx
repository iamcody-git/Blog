import React, { useEffect } from "react";
import Layout from "../../Global/Layout/Layout";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../../../Store/blogSlice";
import STATUSES from "../../../src/Global/Status/Statuses";

const Home = () => {
  const { data: blogs = [], status } = useSelector((state) => state.blog); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);

  return (
    <>
      <Layout />
      {status === STATUSES.LOADING && <p>Loading blogs...</p>}
      {status === STATUSES.ERROR && <p>Error fetching blogs. Please try again.</p>}
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {blogs.length > 0 ? (
          blogs.map((blog) => <Card key={blog?.id} blogs={blog} />)
        ) : (
          status === STATUSES.SUCCESS && <p>No blogs available.</p>
        )}
      </div>
    </>
  );
};

export default Home;
