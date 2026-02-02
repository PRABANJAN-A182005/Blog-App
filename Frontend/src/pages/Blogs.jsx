import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Search from "../comp/Search";
import { Link } from "react-router-dom";

const BLOGS_PER_PAGE = 6;

function Blogs() {
  const location = useLocation();
  const [allBlogs, setAllBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const blogsFromState = location.state?.blogs;

    // ✅ If blogs come from Search page
    if (Array.isArray(blogsFromState)) {
      const sorted = blogsFromState
        .filter(b => b?.dateOfPublish)
        .sort(
          (a, b) =>
            new Date(b.dateOfPublish) - new Date(a.dateOfPublish)
        );

      setAllBlogs(sorted);
      setCurrentPage(1);
      setLoading(false);
      return;
    }

    // ✅ Always fetch as fallback
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/blogs`
        );
        const data = await res.json();

        setAllBlogs(
          data.sort(
            (a, b) =>
              new Date(b.dateOfPublish) -
              new Date(a.dateOfPublish)
          )
        );
      } catch (err) {
        console.error("Failed to fetch blogs", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [location.state?.blogs, location.key]); // ✅ IMPORTANT FIX

  if (loading) {
    return <p className="text-center py-20">Loading blogs...</p>;
  }

  const totalPages = Math.ceil(allBlogs.length / BLOGS_PER_PAGE);
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const currentBlogs = allBlogs.slice(
    startIndex,
    startIndex + BLOGS_PER_PAGE
  );

  return (
    <>
      <Search />

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Blogs</h2>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {currentBlogs.map(blog => (
            <article
              key={blog._id}
              className="bg-white rounded-xl shadow"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mt-2">
                  {blog.shortDescription}
                </p>
              </div>
              <Link to={`/blogs/${blog._id}`} className="inline-block ml-5 mb-4 text-blue-600 font-medium">
                Read More
              </Link>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              disabled={currentPage === 1}
              onClick={() =>
                setCurrentPage(prev => prev - 1)
              }
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Prev
            </button>

            <span className="px-4 py-2 font-medium">
              Page {currentPage} of {totalPages}
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage(prev => prev + 1)
              }
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default Blogs;
