import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

// ===== Background & Hero Images =====
import bgCoverImg from "../../../assets/bannar/bgheader01.png";
import heroImg1 from "../../../assets/bannar/hero1.png";
import heroImg2 from "../../../assets/bannar/hero2.png";
import heroImg3 from "../../../assets/bannar/hero3.png";

// ===== Social Icons =====
import socialImgLinkedIn from "../../../assets/socialIcoin/linkedin.png";
import socialImgInstagram from "../../../assets/socialIcoin/instagram.png";
import socialImgGithub from "../../../assets/socialIcoin/github.png";
import socialImgYoutube from "../../../assets/socialIcoin/youtube.png";

const TopBanner = () => {
    // ===== Scroll Function =====
    const scrollToAbout = () => {
        const contactSection = document.getElementById("contact-section");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    // ===== Banner Buttons =====
    const BannerButtons = () => (
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
            <Link to="/contact">
                <button className="btn bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1a1a1a] transition">
                    Let’s Talk ↗
                </button>
            </Link>
            <Link to="/MoreAboutMe">
                <button className="btn bg-white text-black px-6 py-3 rounded-md font-semibold border border-black hover:bg-black hover:text-white transition">
                    My Skills ↗
                </button>
            </Link>
        </div>
    );

    // ===== Social Icons =====
    const SocialIcons = () => (
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-10 text-base sm:text-lg font-medium">
            <p>10+ Worldwide clients</p>
            <span className="text-gray-800 hidden sm:inline">|</span>
            <div className="flex gap-4 items-center">
                <a
                    href="https://linkedin.com/in/sagy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={socialImgLinkedIn}
                        alt="LinkedIn"
                        className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110 transition-transform"
                    />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <img
                        src={socialImgGithub}
                        alt="GitHub"
                        className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110 transition-transform"
                    />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={socialImgInstagram}
                        alt="Instagram"
                        className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110 transition-transform"
                    />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <img
                        src={socialImgYoutube}
                        alt="YouTube"
                        className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110 transition-transform"
                    />
                </a>
            </div>
        </div>
    );


    return (
        <div className="relative overflow-hidden">
            {/* ===== Carousel Section ===== */}
            <Carousel
                autoPlay
                infiniteLoop
                interval={3500}
                showThumbs={false}
                showStatus={false}
                showIndicators
                swipeable
                emulateTouch
                stopOnHover={false}
            >
                {/* =========================================================
           SLIDE 1 – Intro
        ========================================================= */}
                <div
                    className="hero bg-cover bg-center relative"
                    style={{
                        backgroundImage: `url(${bgCoverImg})`,
                        minHeight: "600px",
                        maxHeight: "800px",
                    }}
                >
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 md:px-12">
                        {/* Left Text Section */}
                        <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left text-[#0a0a0a]">
                            <p className="text-base md:text-lg font-medium mb-4 border-l-2 border-black pl-2">
                                Hello, I’m
                            </p>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight relative mb-2">
                                <span className="relative z-10">
                                    Sagor
                                    <span className="absolute -left-4 -top-3 w-16 h-16 bg-[#FFB02E] rounded-full -z-10"></span>
                                </span>
                                <br />
                                Chowdhury
                            </h1>

                            <p className="text-lg sm:text-xl mt-3 font-medium">
                                Web Developer <span className="text-[#222]">| Based in Dubai</span>
                            </p>

                            <BannerButtons />
                            <SocialIcons />
                        </div>

                        {/* Right Image Section */}
                        <div className="md:w-1/2 w-full justify-center items-center mb-8 md:mb-0 hidden md:block">
                            <img
                                src={heroImg1}
                                alt="Banner 1"
                                className="object-contain max-h-[777px] w-auto drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Floating “Scroll Down” Button (Inside Banner) */}
                    <div
                        onClick={scrollToAbout}
                        className="absolute bottom-10 right-10 z-30 cursor-pointer group"
                    >
                        <div className="relative w-20 h-20 rounded-full bg-[#FFB02E] flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300">
                            {/* Outer Circle Border */}
                            <div className="absolute inset-0 rounded-full border-[3px] border-black flex items-center justify-center animate-spin-slow">
                                <p className="text-[10px] font-bold tracking-[2px] uppercase text-black text-center leading-tight">
                                    SCROLL <br /> DOWN
                                </p>
                            </div>

                            {/* Down Arrow Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="black"
                                className="w-6 h-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                </div>

                {/* Other Slides (2 & 3 remain same) */}
                <div
                    className="hero bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${bgCoverImg})`,
                        minHeight: "600px",
                        maxHeight: "800px",
                    }}
                >
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 md:px-12">
                        <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left text-[#0a0a0a]">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold relative mb-2">
                                <span className="relative z-10">
                                    I’ve
                                    <span className="absolute -left-4 -top-3 w-16 h-14 bg-[#FFB02E] rounded-full -z-10"></span>
                                </span>
                                <br />
                                got your back with SEO.
                                <br /> Let’s collaborate
                            </h1>
                            <BannerButtons />
                            <SocialIcons />
                        </div>

                        <div className="md:w-1/2 w-full justify-center items-center mb-8 md:mb-0 hidden md:block">
                            <img
                                src={heroImg2}
                                alt="Banner 2"
                                className="object-cover object-top max-h-[590px] w-full drop-shadow-2xl"
                                style={{ objectPosition: "center +25%" }}
                            />
                        </div>
                    </div>
                    {/* Floating “Scroll Down” Button (Inside Banner) */}
                    <div
                        onClick={scrollToAbout}
                        className="absolute bottom-10 right-10 z-30 cursor-pointer group"
                    >
                        <div className="relative w-20 h-20 rounded-full bg-[#FFB02E] flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300">
                            {/* Outer Circle Border */}
                            <div className="absolute inset-0 rounded-full border-[3px] border-black flex items-center justify-center animate-spin-slow">
                                <p className="text-[10px] font-bold tracking-[2px] uppercase text-black text-center leading-tight">
                                    SCROLL <br /> DOWN
                                </p>
                            </div>

                            {/* Down Arrow Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="black"
                                className="w-6 h-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div
                    className="hero bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${bgCoverImg})`,
                        minHeight: "600px",
                        maxHeight: "800px",
                    }}
                >
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 md:px-12">
                        <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left text-[#0a0a0a]">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold relative mb-2">
                                <span className="relative z-10">
                                    Your
                                    <span className="absolute -left-4 -top-3 w-16 h-12 bg-[#FFB02E] rounded-full -z-10"></span>
                                </span>
                                <br />
                                journey to a Personal Brand starts here.
                            </h1>

                            <BannerButtons />
                            <SocialIcons />
                        </div>

                        <div className="md:w-1/2 w-full justify-center items-center mb-8 md:mb-0 hidden md:block">
                            <img
                                src={heroImg3}
                                alt="Banner 3"
                                className="object-contain max-h-[777px] w-auto drop-shadow-2xl"
                            />
                        </div>
                    </div>
                    {/* Floating “Scroll Down” Button (Inside Banner) */}
                    <div
                        onClick={scrollToAbout}
                        className="absolute bottom-10 right-10 z-30 cursor-pointer group"
                    >
                        <div className="relative w-20 h-20 rounded-full bg-[#FFB02E] flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300">
                            {/* Outer Circle Border */}
                            <div className="absolute inset-0 rounded-full border-[3px] border-black flex items-center justify-center animate-spin-slow">
                                <p className="text-[10px] font-bold tracking-[2px] uppercase text-black text-center leading-tight">
                                    SCROLL <br /> DOWN
                                </p>
                            </div>

                            {/* Down Arrow Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="black"
                                className="w-6 h-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default TopBanner;
