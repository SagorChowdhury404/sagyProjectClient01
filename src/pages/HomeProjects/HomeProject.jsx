
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


        </div>
    );
};

export default HomeProject;