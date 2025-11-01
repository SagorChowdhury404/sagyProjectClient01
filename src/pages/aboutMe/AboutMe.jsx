import SectionTitle from "../shared/sectionTittle/SectionTittle";
import "../../pages/aboutMe/AboutMe.css";

// ===== Social Icons =====
import socialImgLinkedIn from "../../assets/socialIcoin/linkedin.png";
import socialImgInstagram from "../../assets/socialIcoin/instagram.png";
import socialImgGithub from "../../assets/socialIcoin/github.png";
import socialImgYoutube from "../../assets/socialIcoin/youtube.png";
import profileImg from "../../assets/bannar/hero2.png"; // Add your image path here
import { Link } from "react-router-dom";

const AboutMe = () => {
    return (
        <div id="contact-section" className="  bg-gradient-to-b from-white via-gray-50 to-white">
            {/* <section className="pt-10">
                <SectionTitle heading="About me"></SectionTitle>
            </section> */}

            {/* ===== Main Banner Section ===== */}
            <section className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 md:px-20 ">
                {/* === Left Image === */}
                <div className="relative flex justify-center md:justify-end w-full md:w-1/2">
                    <div className="relative">
                        <div className="absolute -top-6 -left-6 rounded-[50%] w-80 h-64 md:w-80 md:h-80 -z-10"></div>
                        <img
                            src={profileImg}
                            alt="Sagar Chowdhury"
                            className=" rounded-xl object-cover shadow-lg"
                        />
                        <div className="absolute bottom-[-20px] md:left-1/2  bg-[#FFB02E] text-black font-bold px-4 py-2 rounded-md shadow-lg text-4xl text-center">
                            1+ Year of Experience
                        </div>
                    </div>
                </div>

                {/* === Right Text === */}
                <div className="md:w-1/2 text-center md:text-left">
                    <p className="text-sm md:text-base text-gray-500 mb-2">
                        Hello I’m
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
                        <span className="text-[#FFB02E]">Sagar</span>{" "}
                        Chowdhury
                    </h1>
                    <h2 className="text-xl md:text-2xl text-[#FF7A00] font-semibold mb-4">
                        Web Developer
                    </h2>

                    <p className="text-gray-700 mb-2 font-medium">
                        You can call me <span className="font-bold">SAGY</span>,
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        I’m a full-stack developer helping build modern portfolios,
                        e-commerce stores, and custom web apps. I create high-converting,
                        SEO-friendly websites that don’t just look great — they perform.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                        <p className="font-semibold text-gray-700">
                            10+ <span className="font-normal">Worldwide Clients</span>
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <img src={socialImgLinkedIn} alt="LinkedIn" className="w-6 hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <img src={socialImgGithub} alt="GitHub" className="w-6 hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src={socialImgInstagram} alt="Instagram" className="w-6 hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <img src={socialImgYoutube} alt="YouTube" className="w-6 hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>
                    <Link to="/contact">


                        <button className="mt-8 bg-blue-700 text-white px-10 py-3 rounded-md font-semibold hover:bg-[#1a1a1a] transition">
                            Let’s Talk ↗
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AboutMe;
