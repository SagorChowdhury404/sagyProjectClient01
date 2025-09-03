import UseProjectApi from '../../../hooks/UseProjectApi';
import LoadingPage from '../../shared/loadingPage/LoadingPage';
import ProjectCard from '../projectCard/ProjectCard';

const Projects = () => {
    const [projects, loading] = UseProjectApi();
    if (loading) return <LoadingPage></LoadingPage>;
    
    // ✅ Filter projects with category "project"
    const dataProject = projects.filter(project => project.category === "project");

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16 py-10">
            {dataProject.map(project => <ProjectCard project={project} ></ProjectCard>


            )}
        </div>
    );
};

export default Projects;
