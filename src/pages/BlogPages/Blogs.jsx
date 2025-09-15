import { Helmet } from "react-helmet-async";
import Contact from "../shared/contact/Contact";
import LoadingPage from "../shared/loadingPage/LoadingPage";
import ProjectCard from "../HomeProjects/projectCard/ProjectCard";
import SectionTitle from "../shared/sectionTittle/SectionTittle";
import UseBlogApi from "../../hooks/UseBlogApi";

const Blogs = () => {
    const [blogs, loading] = UseBlogApi();
    if (loading) return <LoadingPage></LoadingPage >;

    // ✅ Filter projects with projectCategory "project"
    const category = blogs.filter(project => project.category === "blog");
    return (
        <div>
            <Helmet> <title>Blogs</title> </Helmet>
            <section>
                <SectionTitle heading="blog Are"
                    subHeading="our client story Journey to a Personal Brand "></SectionTitle>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16 py-10">
                {category.map(project => <ProjectCard project={project} ></ProjectCard>


                )}
            </div>



        </div>
    );
};

export default Blogs;