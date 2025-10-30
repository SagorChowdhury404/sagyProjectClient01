import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./FaqComponents.css";

const FaqComponents = () => {
	const [activeIndex, setActiveIndex] = useState(1);

	const toggleAccordion = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
	};

	const steps = [
		{
			id: 1,
			title: "Discover",
			content: (
				<div>
					<h3 className="text-xl font-semibold text-gray-800 mb-3">01 – Discover</h3>
					<ul className="text-gray-600 space-y-2 list-disc list-inside">
						<li>Research and analysis to understand your needs.</li>
						<li>Define goals and project requirements clearly.</li>
						<li>Competitor and market research for direction.</li>
					</ul>
				</div>
			),
		},
		{
			id: 2,
			title: "Design",
			content: (
				<div>
					<h3 className="text-xl font-semibold text-gray-800 mb-3">02 – Design</h3>
					<ul className="text-gray-600 space-y-2 list-disc list-inside">
						<li>Crafting visually engaging UI layouts and user flows.</li>
						<li>Wireframes and prototypes for better visualization.</li>
						<li>Ensuring responsive and accessible designs.</li>
					</ul>
				</div>
			),
		},
		{
			id: 3,
			title: "Build",
			content: (
				<div>
					<h3 className="text-xl font-semibold text-gray-800 mb-3">03 – Build</h3>
					<ul className="text-gray-600 space-y-2 list-disc list-inside">
						<li>Developing full-stack functionality with best practices.</li>
						<li>Clean, maintainable, and scalable code structure.</li>
						<li>Testing across multiple devices and browsers.</li>
					</ul>
				</div>
			),
		},
		{
			id: 4,
			title: "Launch",
			content: (
				<div>
					<h3 className="text-xl font-semibold text-gray-800 mb-3">04 – Launch</h3>
					<ul className="text-gray-600 space-y-2 list-disc list-inside">
						<li>Deploying the website or app to a live environment.</li>
						<li>Monitoring performance and optimizing for SEO.</li>
						<li>Ongoing support and future improvements.</li>
					</ul>
				</div>
			),
		},
	];

	return (
		<section className="bg-gray-50 py-16 dark:bg-gray-100 dark:text-gray-800 lg:px-32">
			<div className="max-w-6xl px-6 mx-auto">
				<p className="p-2 text-2xl font-bold tracking-wider text-center uppercase text-black">
					How it works
				</p>
				<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl text-gray-900">
					<h1 className="text-4xl font-extrabold leading-tight relative mb-2">
						<span className="relative z-20">
							The
							<span className="absolute -left-5 -top-3 w-10 h-10 bg-yellow-400 rounded-full -z-20"></span>
						</span>
						<span className="text-yellow-500"> process</span> that deliver results..
					</h1>
				</h2>

				{/* Accordion Section */}
				<div className="grid md:grid-cols-2 gap-10 items-start">
					{/* Left Accordion */}
					<div className="space-y-4">
						{steps.map((step) => (
							<div key={step.id}>
								<button
									onClick={() => toggleAccordion(step.id)}
									className={`w-full flex justify-between items-center px-5 py-3 rounded-md text-left font-semibold transition-all duration-300 ${
										activeIndex === step.id
											? "bg-black text-white"
											: "bg-gray-100 text-gray-700 hover:bg-gray-200"
									}`}
								>
									<span>{step.title}</span>
									<FaChevronDown
										className={`transition-transform duration-300 ${
											activeIndex === step.id ? "rotate-180" : ""
										}`}
									/>
								</button>
							</div>
						))}
					</div>

					{/* Right Content */}
					<div className="bg-white p-6 rounded-lg shadow-md min-h-[250px] transition-all duration-500">
						{steps.map(
							(step) =>
								activeIndex === step.id && (
									<div key={step.id} className="animate-fadeIn">
										{step.content}
									</div>
								)
						)}
					</div>
				</div>

				{/* 🔥 Bonus Section: LinkedIn Optimization */}
				<div className="mt-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl shadow-lg p-10 text-black text-center">
					<h3 className="text-3xl font-extrabold mb-4">
						🎯 Bonus Part: LinkedIn Optimization
					</h3>
					<p className="text-lg max-w-3xl mx-auto leading-relaxed mb-6">
						Want to build a strong online presence? Optimize your LinkedIn profile like a pro!
						Enhance your visibility, grow your network, and attract real opportunities.
					</p>

					<div className="flex flex-wrap justify-center gap-4 mt-6">
						<div className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition">
							Profile Makeover
						</div>
						<div className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition">
							Headline Optimization
						</div>
						<div className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition">
							Banner Design
						</div>
						<div className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition">
							Keyword Boost
						</div>
					</div>

					<p className="text-base mt-8 font-medium">
						💼 Boost your personal brand — because your LinkedIn is your digital resume.
					</p>
				</div>
			</div>
		</section>
	);
};

export default FaqComponents;
