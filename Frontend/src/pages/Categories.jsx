import React from 'react'
import { Link } from 'react-router-dom';


function Categories() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Categories</h2>

        <div className="flex gap-4 flex-wrap">
          <Link to="/categories/React" className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full">React</Link>
          <Link to="/categories/JavaScript" className="bg-green-100 text-green-600 px-4 py-2 rounded-full">JavaScript</Link>
          <Link to="/categories/CSS" className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full">CSS</Link>
        </div>
      </section>
    </>
  )
}
export default Categories