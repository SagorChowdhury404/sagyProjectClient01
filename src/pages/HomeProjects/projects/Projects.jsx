import UseProjectApi from '../../../hooks/UseProjectApi';
import LoadingPage from '../../shared/loadingPage/LoadingPage';
import ProjectCard from '../projectCard/ProjectCard';

const Projects = () => {
    const [projects, loading] = UseProjectApi();
    if (loading) return <LoadingPage></LoadingPage>;

    
    // Filter projects with category "project";

    const dataProject = projects.filter(project => project.category === "webProject");

    return (

        <div className="text-center sm:text-left before:block before:w-24 before:h-3  before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
            <h1 className='text-2xl font-bold'>WEB PROJECTS</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16 py-10">

                {dataProject.map(project => <ProjectCard project={project} ></ProjectCard>)}

            </div>
        </div>
    );
};

export default Projects;
