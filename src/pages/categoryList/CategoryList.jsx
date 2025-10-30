import { Link } from "react-router-dom";
import services from "../../../public/services.json"; // import JSON file

const CategoryList = () => {
  return (
    <section className="w-full px-5 md:px-20 py-16 md:py-24 bg-gray-50">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mx-10">
        <div>
          <p className="text-sm text-orange-500 font-semibold tracking-wide uppercase">
            Services
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            My <span className="text-orange-500">Specialties</span>
          </h2>
        </div>
        <p className="text-gray-600 max-w-md mt-4 md:mt-0 text-sm md:text-base leading-relaxed">
          Helping you build your online personal brand through modern web apps,
          SEO-friendly designs, and optimized digital presence.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service,
          // index 
        ) => (
          // <Link
          //   to={service.link}
          //   key={index}
          //   className="group bg-white/70 backdrop-blur-md border border-gray-100 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          // >
          <div className="flex flex-col h-full justify-between gap-4 group bg-white/70 backdrop-blur-md border border-gray-100 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-5">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12"
                />
                <span className="text-2xl text-gray-500 group-hover:text-orange-500 transition-transform transform group-hover:translate-x-1">
                  ↗
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description} MORE...
              </p>
            </div>
          </div>
          // </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
