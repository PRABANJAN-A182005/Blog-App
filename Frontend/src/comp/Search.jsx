import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
function Search(){

    const inputRef = useRef(null);
    const navigate = useNavigate();

    const SearchBlogs = () => {
        fetch(`${import.meta.env.VITE_API_URL}/api/blogs?q=${encodeURIComponent(inputRef.current.value)}`)
        .then(res => res.json())
        .then(data => {
            navigate("/blogs", {state: {blogs: data}});
        });
    };
    return (

        <div className="w-full max-w-md mx-auto mt-10">
            <form onSubmit={(e) => {e.preventDefault(); SearchBlogs();}} className="flex items-center bg-white border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                <input
                    type="search"
                    placeholder="🔍Search blogs..."
                    ref={inputRef}
                    className="w-full px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none"
                />

                <button
                    type="submit"
                    className="px-5 py-2 text-white bg-blue-600 rounded-r-lg hover:bg-blue-700 transition">
                    Search
                </button>

            </form>
        </div>
    )
}

export default Search