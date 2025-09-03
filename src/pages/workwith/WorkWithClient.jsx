import { Helmet } from "react-helmet-async";
import SectionTitle from "../shared/sectionTittle/SectionTittle";

const WorkWithClient = () => {
    return (
        <div>
              <Helmet> <title>work with</title> </Helmet>
           <section>
                <SectionTitle heading="our client "
                    subHeading="our client story Journey to a Personal Brand "></SectionTitle>
            </section>
            <h1>Work With Client</h1>
        </div>
    );
};

export default WorkWithClient;