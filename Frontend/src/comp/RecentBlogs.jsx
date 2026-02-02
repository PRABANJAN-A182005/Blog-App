import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react'

function RecentBlogs() {
    const [blogs , setBlogs] = useState([]);
    const [loading , setLoading] = useState(false);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/blogs`)
        .then(res => res.json())
        .then(data => {
        const sorted = data.sort(
          (a, b) => new Date(b.dateOfPublish) - new Date(a.dateOfPublish)
        );
        setBlogs(sorted.slice(0,3))
        setLoading(true);
    }).catch(err => console.log(err));
    }, []);


    if (!loading) {
        return <div className="text-center py-20">Loading recent blogs...</div>;
    }
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">

            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Recent Blogs</h2>
                <Link to="/blogs" className="text-blue-600 hover:underline">
                    View All →
                </Link>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
                {blogs.map((blog) => (
                    <article className="bg-white rounded-xl shadow hover:shadow-lg transition">
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
                        <a href="#" className="inline-block mt-4 text-blue-600 font-medium">
                            Read more →
                        </a>
                    </div>
                </article>
                ))}
            </div>
        </section>

    )
}

export default RecentBlogs