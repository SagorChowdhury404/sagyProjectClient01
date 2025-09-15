
import LinkedInPage from '../linkedInPage/LinkedInPage.jsx';
import SeoPage from '../seoPage/SeoPage';
import SectionTitle from '../shared/sectionTittle/SectionTittle';
import Projects from './projects/Projects';

const HomeProject = () => {

    return (
        <div>
            <section>
                <SectionTitle heading="Project Are"
                    subHeading="Your Journey to a Personal Brand Starts Here"></SectionTitle>
            </section>

            {/* <UseProjectApi></UseProjectApi> */}
            <Projects ></Projects>
            <SeoPage></SeoPage>

            <LinkedInPage></LinkedInPage>



        </div>
    );
};

export default HomeProject;