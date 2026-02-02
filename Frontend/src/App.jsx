import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Blogs from "./pages/Blogs.jsx";
import Blog from "./comp/Blog.jsx";
import Categories from "./pages/Categories.jsx";
import CategoryDetails from "./comp/CategoryDetails.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./comp/Footer.jsx";
import Navbar from './comp/Navbar.jsx';

function App() {
  return (
       <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/categories" element={<Categories />} />
          <Route path='/blogs/:id' element={<Blog />} />
          <Route path="/categories/:category" element={<CategoryDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>


      <Footer />
    </div>
  )
}

export default App
