import React from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


function CategoryDetails() {
  const { category } = useParams();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogsByCategory = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/blogs`
        );
        const data = await res.json();
        const filtered = data.filter(blog => blog.category.toLowerCase() === category.toLowerCase());
        setBlogs(filtered);
      }
      catch (err) {
        console.error("Failed to fetch blogs by category", err);
      }
    };
    fetchBlogsByCategory();
  }, [category]);
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">{category} Blogs</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {blogs.map((blog) => (
            <article key={blog._id} className="bg-white rounded-xl shadow hover:shadow-lg transition">
              <Link
                to={`/blogs/${blog._id}`}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-5">
                  <span className="text-sm text-blue-600 font-medium">{blog.category}</span>
                  <h3 className="text-xl font-semibold mt-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    {blog.shortDescription}
                  </p>

                  <span className="inline-block mt-4 text-blue-600 font-medium">
                    Read more →
                  </span>

                </div>

              </Link>
            </article>
          ))}
        </div>
      </section>
    </>

  )
}

export default CategoryDetails