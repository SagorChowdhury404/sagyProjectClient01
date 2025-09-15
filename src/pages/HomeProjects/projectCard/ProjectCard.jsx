import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
    const { bannerImage, title, description, id, technologyUsed, liveLink } = project;

    return (
        <div className="max-w-lg shadow-md rounded-md bg-white dark:bg-gray-900 dark:text-gray-200 border border-gray-200 dark:border-gray-700">
            {/* Image */}
            <img
                src={bannerImage}
                alt={`${title} banner`}
                className="block object-cover object-center w-full rounded-t-md h-52"
            />

            <div className="p-4">
                {/* Title */}
                <h3 className="text-lg font-semibold">{title}</h3>

                {/* Description with inline link */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {description}{" "}
                    <Link
                        to={`/project/${id}`}
                        className="underline text-blue-500 hover:text-blue-600"
                    >
                        click here
                    </Link>
                </p>

                {/* Tech Stack */}
                <h4 className="text-sm font-medium mt-3">Technology Used:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                    {technologyUsed.map((tech, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full dark:bg-gray-800 dark:text-gray-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-4 justify-evenly ">
                    {/* Live Site Button */}
                    <a
                        href={liveLink}

                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 text-sm rounded-md bg-blue-800 text-white hover:bg-gray-700 transition"
                    >
                        Live Site
                    </a>

                    {/* Details Button */}
                    <Link to={`/project/${id}`}>
                        <button className="px-3 py-1 text-sm rounded-md border border-gray-400 bg-blue-800  dark:hover:bg-gray-800 transition">
                            More Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
