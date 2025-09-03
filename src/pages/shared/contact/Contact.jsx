

const Contact = () => {
    return (
        <div>
            {/* <Helmet> <title>Contact</title> </Helmet> */}
            <section className="py-12 bg-white dark:text-gray-900">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:divide-x">

                    {/* Contact Info */}
                    <div className="space-y-6 md:pr-10">
                        <h2 className="text-4xl font-bold">Get in Touch</h2>
                        <p className="text-gray-600">Fill out the form and we’ll get back to you as soon as possible.</p>

                        <div className="space-y-4 text-gray-700">
                            <p className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-violet-600" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span>123 Real Street, Dubai, UAE</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-violet-600" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span>+971 123 456 789</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-violet-600" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span>contact@yourdomain.com</span>
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-6 md:pl-10">
                        <div>
                            <label htmlFor="name" className="block mb-1 font-medium">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-gray-100"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-1 font-medium">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@example.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-gray-100"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Write your message here..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-gray-100"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="px-6 py-3 text-white bg-violet-600 rounded-md hover:bg-violet-700 transition-colors duration-200 w-full md:w-auto"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default Contact;