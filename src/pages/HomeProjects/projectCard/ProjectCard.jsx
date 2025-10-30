// import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { bannerImage, title, projectCategory, liveLink } = project;

  return (
    <div className=" rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={bannerImage}
          alt={title}
          className="w-full h-56 object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col items-start justify-between h-40">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            APP
          </span>
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            {projectCategory}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-black mb-2">
          {title}  ↗
        </h3>

        {/* View Project */}
        <div className="flex items-center justify-between w-full mt-auto">
          <Link
            to={`/project/${project.id}`}
            className="text-sm font-medium text-gray-800 dark:text-black-200 hover:text-[#FFB02E] transition-colors flex items-center gap-1"
          >
            View Project 
            {/* <ArrowUpRight size={16} /> */}
          </Link>

          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#FFB02E] hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
          >
            Live ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
