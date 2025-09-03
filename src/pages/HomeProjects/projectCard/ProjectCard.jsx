import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {

    const {
        bannerImage,
        title,
        description,
        id
    } = project;

    return (
        <div className="max-w-lg p-4 shadow-md rounded-md dark:bg-gray-50 dark:text-gray-800">
            <img
                src={bannerImage}
                alt={`${title} banner`}
                className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <h3 className="text-xl font-semibold dark:text-violet-600">{title}</h3>
            <p className="leading-snug dark:text-gray-600">{description}</p>
            <Link to={`/project/${id}`}><button class="btn btn-dash btn-primary my-2">Details </button></Link>
        </div>
    );
};

export default ProjectCard;
