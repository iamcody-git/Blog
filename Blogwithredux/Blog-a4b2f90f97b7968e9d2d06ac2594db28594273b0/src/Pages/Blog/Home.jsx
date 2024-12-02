import React from 'react'
import Layout from '../../Global/Layout/Layout'
import Card from './Card'

const Home = () => {
  return (
    <>
    <Layout >
        <div className='flex p-9'>
          <Card />
          <Card />
          <Card />
        </div>
    </Layout>
    </>
  )
}

export default Home
