import SectionTitle from '../shared/sectionTittle/SectionTittle';
import { Link } from 'react-router-dom';

const CategoryList = () => {
  return (
    <div>
      {/* <SectionTitle
        heading="What I Do"
        subHeading="Your Journey to a Personal Brand Starts Here"
      /> */}



      <section className="w-full p-20">
        {/* ===== Header Section ===== */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 sm:10 md:mx-20 my-10 ">

          <div>
            <p className="text-sm text-orange-500 font-semibold tracking-wide">
              Services
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              My <span className="text-orange-500">specialties</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-md mt-4 md:mt-0 text-sm md:text-base leading-relaxed">
            Helping you build your online personal brand through modern web apps
            and SEO-friendly design. Let’s collaborate and build a seamless
            experience.
          </p>
        </div>

        {/* ===== Cards Section ===== */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Link to="WebAppsDevelopment" className="text-gray-500 hover:text-black text-sm">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:bg-white  ">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between mb-3">
                  <img
                    src="/src/assets/categorySvg/icons8-linkedin-48.png"
                    alt="LinkedIn Optimization"
                    className="w-10 h-10"
                  />

                  <h1> ↗ </h1>

                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Web Apps Development
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Modern, responsive web apps built to perform and scale. I turn
                  ideas into functional digital solutions.
                </p>
                <Link
                  to="WebAppsDevelopment"
                  className="text-gray-700 text-sm font-medium hover:text-orange-500 transition"
                >

                </Link>
              </div>
            </div>
          </Link>
          {/* Card 2 */}
          <Link
            to="SeoPages"
            className="text-gray-700 text-sm font-medium hover:text-orange-500 transition"
          >


            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:bg-white">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between mb-3">
                  <img
                    src="/src/assets/categorySvg/icons8-linkedin-48.png"
                    alt="LinkedIn Optimization"
                    className="w-10 h-10"
                  />

                  ↗

                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  SEO Techniques to Rank
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Smart SEO strategies that help your site rank higher. Get more
                  traffic, visibility, and lasting growth.
                </p>

              </div>
            </div>
          </Link>
          {/* Card 3 */}
          <Link to="LinkedinPages" className="text-gray-500 hover:text-black text-sm">


            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:bg-white">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between mb-3">
                  <img
                    src="/src/assets/categorySvg/icons8-linkedin-48.png"
                    alt="LinkedIn Optimization"
                    className="w-10 h-10"
                  />
                  ↗
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  LinkedIn Profile Optimization
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Transform your LinkedIn into a lead-generating machine. I design
                  profiles that attract clients and opportunities.
                </p>

              </div>
            </div>
          </Link>
        </div>
      </section>













    </div>

  );
};

export default CategoryList;