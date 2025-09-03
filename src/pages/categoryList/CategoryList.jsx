import React from 'react';
import SectionTitle from '../shared/sectionTittle/SectionTittle';

const CategoryList = () => {
  return (
    <div>
      <SectionTitle
        heading="What I Do"
        subHeading="Your Journey to a Personal Brand Starts Here"
      />

      <section className="bg-white rounded-2xl shadow-md w-full p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Item 1 */}
          <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <img src="/src/assets/categorySvg/icons8-web-50.png" alt="Web App" className="w-10 h-10" />
            <div>
              <h2 className="text-lg font-bold text-gray-800">Web Apps Development</h2>
              <p className="text-sm text-gray-600 font-semibold">
                Launch, grow, and define your identity online — tailored just for you.
              </p>
              <small className="text-blue-700 font-bold">Learn more...</small>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <img src="/src/assets/categorySvg/icons8-seo-100.png" alt="SEO" className="w-10 h-10" />
            <div>
              <h2 className="text-lg font-bold text-gray-800">SEO Techniques to Rank</h2>
              <p className="text-sm text-gray-600 font-semibold">
                Launch, grow, and define your identity online — tailored just for you.
              </p>
              <small className="text-blue-700 font-bold">Learn more...</small>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <img src="/src/assets/categorySvg/icons8-linkedin-48.png" alt="LinkedIn" className="w-10 h-10" />
            <div>
              <h2 className="text-lg font-bold text-gray-800">Turn Your LinkedIn Profile into a Lead-Generating Machine</h2>
              <p className="text-sm text-gray-600 font-semibold">
                Launch, grow, and define your identity online — tailored just for you.
              </p>
              <small className="text-blue-700 font-bold">Learn more...</small>
            </div>
          </div>

        
        </div>
      </section>
    </div>

  );
};

export default CategoryList;