import { Link } from "react-router-dom";
import { FaRegHeart, FaRegClock } from "react-icons/fa";

const BlogCard = ({ blog }) => {
  const { id,image, category, tag, title, comments, readTime} = blog;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
        
      {/* Blog Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Blog Content */}
      <div className="p-5">
        {/* Category & Tag */}
        <div className="flex gap-2 text-sm mb-2">
          <span className="text-gray-600 font-medium">{category}</span>
          <span className="text-orange-500 font-medium"> {tag}</span>
        </div>

        {/* Title */}
        <Link to={`/blogs/${id}`} >
          <h2 className="text-lg font-semibold text-gray-900 leading-snug hover:text-orange-500 transition-colors duration-300">
            {title}
          </h2>
        </Link>

        {/* Footer Info */}
        <div className="flex justify-between items-center text-gray-500 text-sm mt-4">
          <div className="flex items-center gap-1">
            <FaRegHeart className="text-orange-400" />
            <span>{comments}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaRegClock className="text-orange-400" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
