import React from "react";

import UseBlogApi from "../../../hooks/UseBlogApi";
import BlogCard from "../BlogCards/BlogCard";

const Blogs = () => {
    const [blogs, loading] = UseBlogApi();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[70vh]">
                <p className="text-gray-600 text-lg">Loading blogs...</p>
            </div>
        );
    }

    return (
        <section className="w-full px-5 md:px-20 py-16 md:py-24 bg-white">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    My blog <span className="text-orange-500">post</span>
                </h1>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </section>
    );
};

export default Blogs;
