import { Helmet } from "react-helmet-async";
import Contact from "../shared/contact/Contact";
import UseProjectApi from "../../hooks/UseProjectApi";
import ProjectCard from "../HomeProjects/projectCard/ProjectCard";
import LoadingPage from "../shared/loadingPage/LoadingPage";

const ProjectAll = () => {
    const [projects, loading] = UseProjectApi();
    if (loading) return <LoadingPage></LoadingPage >;

    //webApp Landing Static 

    // ✅ Filter projects with projectCategory "project"
    const webApp = projects.filter(project => project.projectCategory === "webApp");
    const Landing = projects.filter(project => project.projectCategory === "Landing");
    const Static = projects.filter(project => project.projectCategory === "Static");


    return (

        <div>
            <Helmet> <title>ProjectAll</title> </Helmet>

            <section>
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800 my-5 ">
                    <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span> Web </span>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>Seo </span>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <span>LinkedIn</span>
                    </a>

                </div>
            </section>



            <h1 className='before:block before:w- before:h-3 before:mb-5 before:rounded-md before:mx-auto before:dark:bg-violet-600 '></h1>




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