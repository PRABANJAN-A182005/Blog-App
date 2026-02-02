import React from 'react'
import RecentBlogs from '../comp/RecentBlogs.jsx'

function Home() {
  return (
    <>
        <section className="max-w-7xl mx-auto px-4 py-16 text-center">
            <h2 className="text-4xl font-bold mb-4 ">Welcome to MyBlog</h2>
            <p className="text-gray-600 text-lg">
                Read articles on React, JavaScript, Web Development & more.
            </p>
        </section> 
        <RecentBlogs />  
    </>
      
  )
}

export default Home