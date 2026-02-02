import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow sticky w-full z-10 top-0">
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">MyBlog</h1>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
        <li><Link to="/blogs" className="hover:text-blue-600">Blogs</Link></li>
        <li><Link to="/categories" className="hover:text-blue-600">Categories</Link></li>
        <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
        <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar