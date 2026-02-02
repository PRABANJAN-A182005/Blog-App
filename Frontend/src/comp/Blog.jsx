import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Blog() {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`)
      .then(res => res.json())
      .then(data => {
        setBlogData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center py-20">Loading blog...</p>;
  }

  if (!blogData || blogData.message) {
    return (
      <p className="text-center py-20 text-red-500">
        Blog not found
      </p>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">

      {/* Back */}
      <Link
        to="/blogs"
        className="text-blue-600 text-sm font-medium mb-6 inline-block"
      >
        ← Back to Blogs
      </Link>

      {/* Category */}
      <p className="text-sm text-blue-600 font-medium mb-2 capitalize">
        {blogData.category}
      </p>

      {/* Title */}
      <h1 className="text-4xl font-bold leading-tight mb-4">
        {blogData.title}
      </h1>

      {/* Meta */}
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
        <span>
          🗓️ {new Date(blogData.dateOfPublish).toDateString()}
        </span>
        <span>✍️ {blogData.author}</span>
      </div>

      {/* Image */}
      <img
        src={blogData.image}
        alt={blogData.title}
        className="w-full h-96 object-cover rounded-xl shadow mb-10"
      />

      {/* Short Description */}
      <p className="text-lg text-gray-700 mb-8 font-medium">
        {blogData.shortDescription}
      </p>

      {/* Blog Content */}
      <p className="text-gray-800  whitespace-pre-line">
        {blogData.blog}
      </p>

    </section>
  );
}

export default Blog;
