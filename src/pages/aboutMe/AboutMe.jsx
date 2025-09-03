import SectionTitle from "../shared/sectionTittle/SectionTittle";
import aboutMeImg from '../../assets/aboutMe/aboutMeImg.jpg'
import '../../pages/aboutMe/AboutMe.css'
import { Link } from "react-router-dom";
const AboutMe = () => {
    return (
        <div>
            <section className="mt-" >
                <SectionTitle heading=' About me'></SectionTitle>
            </section>
            <section className="aboutMeBanner bg-fixed ">
                <div className=" flex flex-col md:flex-row justify-center items-center bg-slate-500 bg-opacity-60 py-12 px-6 md:px-36 gap-8">

                    {/* Image Section */}
                    <div className="w-full md:w-1/2">
                        <img src={aboutMeImg} alt="About Me" className="w-full h-auto rounded-lg shadow-lg" />
                    </div>

                    {/* Description Section */}
                    <div className="w-full md:w-1/2 text-amber-300">
                        <h1 className="text-2xl font-semibold mb-2 text-  ">Hello This Is Sagor Chowdhury, <br /> Call me <span className="text-3xl ">SAGY</span></h1>
                        <h3 className="uppercase text-xl  font-bold mb-4"> i will help make you to online personal brand </h3>
                        <p className="text-xl text-amber-400 leading-relaxed pl-20">
                            I’m a passionate full-stack web developer helping people build their online personal brand through modern portfolio sites, e-commerce stores, and custom web apps.

                            I create high-converting, SEO-friendly websites that don’t just look great — they perform. I also help professionals turn their LinkedIn profiles into lead-generating machines with strategy-focused design. Let’s build something that grows your brand, fast.


                        </p>
                        <button className="btn btn-outline border-0 border-b-4 mt-6 text-white hover:bg-white hover:text-slate-800 transition duration-300">
                            <Link to='MoreAboutMe'> More About Me</Link>
                        </button>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default AboutMe;