import LinkedInPage from '../linkedInPage/LinkedInPage.jsx';
import SeoPage from '../seoPage/SeoPage';
import SectionTitle from '../shared/sectionTittle/SectionTittle';
import Projects from './projects/Projects';
import { Helmet } from "react-helmet-async";
import UseProjectApi from "../../hooks/UseProjectApi";
import ProjectCard from "../HomeProjects/projectCard/ProjectCard";
import LoadingPage from "../shared/loadingPage/LoadingPage";
import { useState } from "react";

const HomeProject = () => {
    const [projects, loading] = UseProjectApi();
    const [activeTab, setActiveTab] = useState("webApp");

    if (loading) return <LoadingPage />;

    // ✅ Filter projects by category
    const webApp = projects.filter(project => project.projectCategory === "webApp");
    const landing = projects.filter(project => project.projectCategory === "Landing");
    const staticWeb = projects.filter(project => project.projectCategory === "Static");

    return (
        <div className=" py-16 bg-gray-50">
            <Helmet>
                <title>My Recent Work | Sagor Portfolio</title>
            </Helmet>

            {/* ===== Section Header ===== */}
            <section className="text-center mb-10">
                {/* <SectionTitle
                    heading="My recent work"
                    subHeading="portfolio "
                /> */}
                <h1 className="text-center mb-10 text-4xl font-bold ">My recent work</h1>
            </section>

            {/* ===== Tabs ===== */}
            <div className="flex justify-center space-x-6 mb-8">
                {["webApp", "Landing", "Static"].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 font-semibold rounded-full transition-all duration-300 
                            ${activeTab === tab
                                ? "bg-black text-white shadow-lg scale-105"
                                : "bg-white text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* ===== Project Grid ===== */}
            <section className="container mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {activeTab === "webApp" && webApp.slice(0, 3).map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                    {activeTab === "Landing" && landing.slice(0, 3).map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                    {activeTab === "Static" && staticWeb.slice(0, 3).map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <a
                        href="/projectAll"
                        className="inline-flex justify-center items-center gap-2 bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 w-full text-center"
                    >
                        View all Projects ↗
                    </a>
                </div>

            </section>


        </div>
    );
};

export default HomeProject;
