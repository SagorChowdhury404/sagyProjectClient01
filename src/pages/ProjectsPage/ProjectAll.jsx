import { Helmet } from "react-helmet-async";
import Contact from "../shared/contact/Contact";
import UseProjectApi from "../../hooks/UseProjectApi";
import ProjectCard from "../HomeProjects/projectCard/ProjectCard";
import LoadingPage from "../shared/loadingPage/LoadingPage";

const ProjectAll = () => {
    const [projects,loading] = UseProjectApi();
    if (loading) return <LoadingPage></LoadingPage >;

    // ✅ Filter projects with projectCategory "project"
    const webApp = projects.filter(project => project.projectCategory === "webApp");
    const Landing = projects.filter(project => project.projectCategory === "Landing");
    const Static = projects.filter(project => project.projectCategory === "Static");
    return (
        <div>
            <Helmet> <title>ProjectAll</title> </Helmet>
            {/* Web App / Dynamic Website */}
            <div className="text-center mb-14 ">
                <h3 className="text-3xl font-semibold"> Web App / Dynamic Website</h3>

                <h1 className='before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:dark:bg-violet-600'> </h1>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16 py-10">
                    {webApp.map(project => <ProjectCard project={project} ></ProjectCard>


                    )}
                </div>
            </div>

            {/* Landing Page Website */}
            <div className="text-center mb-14 ">
                <h3 className="text-3xl font-semibold">Landing Page Website</h3>

                <h1 className='before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:dark:bg-violet-600'> </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16 py-10">
                    {Landing.map(project => <ProjectCard project={project} ></ProjectCard>


                    )}
                </div>

                <section className="card">

                </section>


            </div>

            {/* //Static Website */}
            <div className="text-center mb-14 ">
                <h3 className="text-3xl font-semibold">Static Website </h3>
                {/* <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">Technologies I Work With</span> */}
                <h1 className='before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:dark:bg-violet-600'> </h1>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16 py-10">
                    {Static.map(project => <ProjectCard project={project} ></ProjectCard>


                    )}
                </div>

            </div>


            <Contact></Contact>
        </div>
    );
};

export default ProjectAll;