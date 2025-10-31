import { Helmet } from "react-helmet-async";
import Contact from "../shared/contact/Contact";
import UseProjectApi from "../../hooks/UseProjectApi";
import ProjectCard from "../HomeProjects/projectCard/ProjectCard";
import LoadingPage from "../shared/loadingPage/LoadingPage";
import { useState } from "react";

const ProjectAll = () => {
    const [projects, loading] = UseProjectApi();
    const [activeTab, setActiveTab] = useState("Web");

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
                <section className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800 my-5">


                    {/* Web */}
                    <a
                        onClick={() => setActiveTab("Web")}
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 cursor-pointer 
            ${activeTab === "Web"
                                ? "border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-blue-600 "
                                : "border-b dark:border-gray-600 dark:text-gray-600"}`}
                    >
                        <span>Web</span>
                    </a>









                    {/* SEO */}
                    <a
                        onClick={() => setActiveTab("SEO")}
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 cursor-pointer 
            ${activeTab === "SEO"
                                ? "border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-blue-600"
                                : "border-b dark:border-gray-600 dark:text-gray-600"}`}
                    >
                        <span>SEO </span>
                    </a>

                    {/* LinkedIn */}
                    <a
                        onClick={() => setActiveTab("LinkedIn")}
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 cursor-pointer 
            ${activeTab === "LinkedIn"
                                ? "border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-blue-600"
                                : "border-b dark:border-gray-600 dark:text-gray-600"}`}
                    >
                        <span>LinkedIn</span>
                    </a>
                </section>



                {/* //////////////////////////////////////////////// */}

                <h1 className='before:block before:w- before:h-3 before:mb-5 before:rounded-md before:mx-auto before:dark:bg-violet-600 '></h1>


                {/* Show selected tab content */}



                {/* Web App / Dynamic Website */}
                <div className="p-4 bg-gray-50 ">
                    {activeTab === "Web" &&

                        <section>

                            {/* //Web App */}
                            <div className="text-center mb-14 ">
                                <h3 className="text-3xl font-semibold"> Web App / Dynamic Website</h3>

                                <h1 className='before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:dark:bg-violet-600'> </h1>


                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16 py-10">
                                    {webApp.map(project => <ProjectCard project={project} ></ProjectCard>


                                    )}
                                </div>
                            </div>


                            {/* //Landing Website */}
                            <div className="text-center mb-14 ">
                                <h3 className="text-3xl font-semibold">Landing Website </h3>
                                {/* <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">Technologies I Work With</span> */}
                                <h1 className='before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:dark:bg-violet-600'> </h1>


                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16 py-10">
                                    {Landing.map(project => <ProjectCard project={project} ></ProjectCard>


                                    )}
                                </div>

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

                        </section>



                    }





                    {activeTab === "SEO" && <section> <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla in voluptatibus eligendi porro excepturi eveniet ipsam architecto non vel labore, beatae dolores quae sed veniam. Cumque voluptate tempore consectetur sit maxime, in, beatae unde qui non natus sed iusto voluptas nam! Eaque numquam illum maiores beatae provident voluptatem quasi, doloribus facere ratione porro impedit hic sed nesciunt soluta, laborum recusandae voluptatibus similique quae, dolores voluptatum. Commodi quod dolorum temporibus asperiores harum, aliquam sunt praesentium vitae eaque autem repudiandae aut! Impedit assumenda laboriosam numquam, quae blanditiis eveniet reprehenderit beatae consectetur nulla possimus saepe expedita amet itaque optio rerum sapiente tempora!</h1></section>
                    }





                    {activeTab === "LinkedIn" && <section> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, placeat aut. Placeat qui distinctio doloremque dolores fugiat accusantium officiis illum!</section>}
                </div>
            </section >













            <Contact></Contact>
        </div >
    );
};

export default ProjectAll;