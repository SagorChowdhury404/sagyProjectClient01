import React from "react";

const reviews = [
  {
    id: 1,
    text: "Sagor delivered our web application ahead of schedule with clean, scalable code and an eye for detail. The final result exceeded expectations — both in design and performance.",
    name: "John Smith",
    initials: "JS",
    rating: 5,
  },
  {
    id: 2,
    text: "Working with Sagor was a great experience. He quickly understood our requirements and transformed our ideas into a fast, responsive, and user-friendly website.",
    name: "Sarah Johnson",
    initials: "SJ",
    rating: 5,
  },
  {
    id: 3,
    text: "Highly professional and technically skilled developer. Sagor optimized our site speed and improved our SEO ranking significantly within a few weeks.",
    name: "Michael Lee",
    initials: "ML",
    rating: 5,
  },
  {
    id: 4,
    text: "We hired Sagor for a complete redesign of our eCommerce platform. His approach was modern, creative, and focused on user experience. Our conversion rates have doubled since launch.",
    name: "Emma Brown",
    initials: "EB",
    rating: 5,
  },
  {
    id: 5,
    text: "Sagor is an excellent communicator who pays attention to detail. He provided regular updates throughout the project and made sure everything worked perfectly before delivery.",
    name: "David Miller",
    initials: "DM",
    rating: 4,
  },
  {
    id: 6,
    text: "From the initial consultation to final deployment, Sagor handled every step smoothly. His full-stack knowledge and problem-solving skills are truly impressive.",
    name: "Sophia Wilson",
    initials: "SW",
    rating: 5,
  },
  {
    id: 7,
    text: "Sagor built our business website using the MERN stack and integrated custom admin features. The backend is powerful yet simple to manage — exactly what we needed.",
    name: "Robert Taylor",
    initials: "RT",
    rating: 5,
  },
  {
    id: 8,
    text: "Incredible work ethic and passion for development. Sagor not only completed our project but also suggested valuable improvements that made our app more efficient.",
    name: "Olivia White",
    initials: "OW",
    rating: 5,
  },
];


// Dynamic Avatar Component
const Avatar = ({ initials, size = "w-16 h-16", bgColor = "bg-neutral" }) => (
  <div className="avatar avatar-placeholder">
    <div className={`${bgColor} text-white ${size} rounded-full flex items-center justify-center`}>
      <span className="text-xl font-semibold">{initials}</span>
    </div>
  </div>
);

const Review = () => {
  return (
    <section className="py-16 overflow-hidden bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-12 text-left">
          <p className="text-sm text-[#FFB02E] font-semibold uppercase tracking-wider">
            Testimonial
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-2">
            <span className="text-[#FFB02E]">Client</span> Feedback
          </h2>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee gap-6 mb-6">
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="min-w-[280px] max-w-sm bg-white p-6 rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transition-transform transform hover:scale-105"
              >
                <span className="text-5xl text-gray-200 font-serif">“</span>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4 mb-4">
                  {review.text}
                </p>

                {/* Avatar */}
                <div className="flex items-center mb-4">
                  <Avatar initials={review.initials} size="w-12 h-12" bgColor="bg-[#FFB02E]" />
                  <span className="ml-4 font-semibold text-gray-800">{review.name}</span>
                </div>

                {/* Star Rating */}
                <div className="flex">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={`text-yellow-400 text-lg mr-1 ${i < review.rating ? "opacity-100" : "opacity-30"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Style */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Review;
