import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
import { Link } from "react-router-dom";

const TopBanner = () => {
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
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src={socialImgLinkedIn} alt="LinkedIn" className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110 transition-transform" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <img src={socialImgGithub} alt="GitHub" className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110 transition-transform" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={socialImgInstagram} alt="Instagram" className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110 transition-transform" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <img src={socialImgYoutube} alt="YouTube" className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110 transition-transform" />
                </a>
            </div>
        </div>
    );

    return (
        <div>

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
                   SLIDE 1 – Intro: "Hello, I'm Sagor Chowdhury"
                ========================================================= */}
                <div
                    className="hero min-h-[90vh] md:min-h-screen bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgCoverImg})` }}
                >
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 md:px-12">

                        {/* ===== Left Text Section ===== */}
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

                            {/* CTA Buttons */}
                            <BannerButtons></BannerButtons>

                            {/* Social Icons Section */}
                            <SocialIcons></SocialIcons>
                        </div>

                        {/* ===== Right Image Section ===== */}
                        <div className="md:w-1/2 w-full justify-center items-center mb-8 md:mb-0 hidden md:block ">
                            <img
                                src={heroImg1}
                                alt="Banner 1"
                                className=" object-contain max-h-[777px] w-auto drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>

                {/* =========================================================
                   SLIDE 2 – SEO Collaboration
                ========================================================= */}
                <div
                    className="hero min-h-[90vh] md:min-h-screen bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgCoverImg})` }}
                >
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 md:px-12">

                        {/* Left Text Section */}
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

                            {/* CTA Buttons */}
                            <BannerButtons></BannerButtons>

                            {/* Social Icons Section */}
                            <SocialIcons></SocialIcons>
                        </div>

                        {/* <div className="md:w-1/2 w-full flex justify-center items-center mb-8 md:mb-0"></div> */}
                        {/* Right Image Section */}
                        <div className="md:w-1/2 w-full justify-center items-center mb-8 md:mb-0 hidden md:block  ">
                            <img
                                src={heroImg2}
                                alt="Banner 2"
                                className="object-cover object-top max-h-[590px] w-full drop-shadow-2xl"
                                style={{ objectPosition: "center +25%" }}
                            />
                        </div>


                    </div>
                </div>

                {/* =========================================================
                   SLIDE 3 – Personal Brand
                ========================================================= */}
                <div
                    className="hero min-h-[90vh] md:min-h-screen bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgCoverImg})` }}
                >
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 md:px-12">

                        {/* Left Text Section */}
                        <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left text-[#0a0a0a]">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold relative mb-2">
                                <span className="relative z-10">
                                    Your
                                    <span className="absolute -left-4 -top-3 w-16 h-12 bg-[#FFB02E] rounded-full -z-10"></span>
                                </span>
                                <br />
                                journey to a Personal Brand starts here.
                            </h1>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
                                <button className="btn bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1a1a1a] transition">
                                    Let’s Talk ↗
                                </button>
                                <button className="btn bg-white text-black px-6 py-3 rounded-md font-semibold border border-black hover:bg-black hover:text-white transition">
                                    My Skills ↗
                                </button>
                            </div>

                            {/* Social Icons Section */}
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-10 text-base sm:text-lg font-medium">
                                <p>10+ Worldwide clients</p>
                                <span className="text-gray-800 hidden sm:inline">|</span>
                                <div className="flex gap-4 items-center">
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                        <img src={socialImgLinkedIn} alt="LinkedIn" className="w-6 h-6 sm:w-7 sm:h-7" />
                                    </a>
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                        <img src={socialImgGithub} alt="GitHub" className="w-6 h-6 sm:w-7 sm:h-7" />
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                        <img src={socialImgInstagram} alt="Instagram" className="w-6 h-6 sm:w-7 sm:h-7" />
                                    </a>
                                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                        <img src={socialImgYoutube} alt="YouTube" className="w-6 h-6 sm:w-7 sm:h-7" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Image Section */}
                        <div className="md:w-1/2 w-full  justify-center items-center mb-8 md:mb-0 hidden md:block ">
                            <img
                                src={heroImg3}
                                alt="Banner 3"
                                className="object-contain max-h-[777px] w-auto drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default TopBanner;


