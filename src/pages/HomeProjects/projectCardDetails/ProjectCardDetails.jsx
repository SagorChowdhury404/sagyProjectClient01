import { useLoaderData } from "react-router-dom";

const ProjectCardDetails = () => {
    const project = useLoaderData();
    console.log(project)
    return (
        <div>
            <h1>projectCardDetails</h1>
            <div>
                <h1 className="text-2xl font-bold">{project.title}</h1>
                <p>{project.description}</p>
            </div>
        </div>
    );
};

export default ProjectCardDetails;