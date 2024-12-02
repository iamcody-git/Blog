import React, { useEffect, useState } from 'react'
import Layout from '../../Global/Layout/Layout'
import Card from './Card'
import axios from 'axios'
import { baseURL } from '../../config'

const Home = () => {
  const [blogs, setBlogs] = useState([])
  const fetchBlogs = async()=>{
   const response = await axios.get(`${baseURL}/blog`)
    if(response.status === 200){
      setBlogs(response.data.data)
    }
  }
  useEffect(()=>{
    fetchBlogs()

  },[])
  return (
    <>
    <Layout >
        <div className='p-9 space-x-3'>
          {
            blogs.length > 0 && blogs.map((blog)=>{
              return(
                <Card blog={blog} />
              )
            })
          }
        </div>
    </Layout>
    </>
  )
}

export default Home
