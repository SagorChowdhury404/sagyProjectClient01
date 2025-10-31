import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { bannerImage, title, id, liveLink } = project;

  return (
    <div className="flex flex-col justify-between rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white h-full">
      {/* Main link area */}
      <Link to={`/project/${id}`} className=" group flex-grow flex flex-col justify-between">
        {/* Image */}
        <div className="overflow-hidden relative">
          <img
            src={bannerImage}
            alt={title}
            className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="p-5 text-center flex flex-col justify-between flex-grow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 group-hover:text-[#FFB02E] transition-colors min-h-[56px] flex items-center justify-center">
            {title} <span className="text-[#FFB02E] ml-1">↗</span>
          </h3>

          <div className="flex justify-center mt-auto">
            <button className="px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
              View Project ↗
            </button>
          </div>
        </div>
      </Link>

      {/* Live Button */}
      <div className="px-5 py-3 bg-blue-600 flex justify-center">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-block px-6 py-2 text-sm font-semibold text-[#FFB02E] border border-[#FFB02E] rounded-full hover:bg-[#FFB02E] hover:text-blue-900 transition-all duration-300"
        >
          Live ↗
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
