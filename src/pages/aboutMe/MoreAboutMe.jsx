import html5 from '../../assets/TechnologyImg/icon-html5.png';
import css3 from '../../assets/TechnologyImg/icons-css3.png';
import javascript from '../../assets/TechnologyImg/icon-javascript.png';
import reactJs from '../../assets/TechnologyImg/icons-react-js.png';
import tailwindCss from '../../assets/TechnologyImg/icon-tailwind-css.png';
import daisy from '../../assets/TechnologyImg/icons-daisy.png';
import axios from '../../assets/TechnologyImg/react-axios.png';

// import nodeJs from '../../assets/TechnologyImg/icon-node-js.png';
import expressJs from '../../assets/TechnologyImg/icon-node-js.png';
import nodejs2 from '../../assets/TechnologyImg/icon-nodejs.png';
import mongodb from '../../assets/TechnologyImg/icon-mongodb.png';
import RestApi from '../../assets/TechnologyImg/icon-rest-api.png';

import firebase from '../../assets/TechnologyImg/icons-firebase.png';
import jwt from '../../assets/TechnologyImg/icon-jwt.png';
// import validation from '../../assets/TechnologyImg/icon-validation.png';
import validation2 from '../../assets/TechnologyImg/icon-validation (2).png';
import access from '../../assets/TechnologyImg/icons-access.png';

// import git from '../../assets/TechnologyImg/icons-git.png';
import github from '../../assets/TechnologyImg/icons-github.png';
import hosting from '../../assets/TechnologyImg/icons-hosting.png';

import figma from '../../assets/TechnologyImg/icons-hosting.png';
import Contact from '../shared/contact/Contact';
import { Helmet } from 'react-helmet-async';

const SkillSection = ({ title, tools }) => (
    <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div className="bg-gray-800 dark:bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                        <img src={tool.icon} alt={tool.name} className="w-8 h-8 object-contain" />
                    </div>
                    <span className="mt-2 text-sm font-medium text-white dark:text-gray-800">{tool.name}</span>
                </div>
            ))}
        </div>
    </div>
);

const MoreAboutMe = () => {
    const frontendTechs = [
        { name: 'HTML5', icon: html5 },
        { name: 'CSS3', icon: css3 },
        { name: 'JavaScript E6', icon: javascript },
        { name: 'ReactJS', icon: reactJs },
        { name: 'Tailwind', icon: tailwindCss },
        { name: 'DaisyUI', icon: daisy },
        { name: 'Axios', icon: axios },
    ];

    const backendTechs = [
        // { name: 'NodeJS', icon: nodeJs },
        { name: 'ExpressJS', icon: expressJs },
        { name: 'NodeJS', icon: nodejs2 },
        { name: 'MongoDB', icon: mongodb },
        { name: 'REST API', icon: RestApi },
    ];

    const authTools = [
        { name: 'Firebase', icon: firebase },
        { name: 'JWT', icon: jwt },
        // { name: 'Validation 1', icon: validation },
        { name: 'AccessRole', icon: access },
        { name: 'Validation ', icon: validation2 },

    ];

    const versionControl = [
        // { name: 'Git', icon: git },
        { name: 'GitHub', icon: github },
        { name: 'Hosting', icon: hosting },
    ];

    const otherTools = [
        { name: 'Figma', icon: figma },
    ];

    return (
        <div className="dark:bg-gray-100 dark:text-gray-800">
            <Helmet> <title>AboutMe</title> </Helmet>

            {/* Education Section */}
            <section className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="grid gap-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
                            <h3 className="text-3xl font-semibold">Education Qualification</h3>
                            <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">Sagor Chowdhury</span>
                        </div>
                    </div>
                    <div className="relative col-span-12 sm:col-span-9 px-4 space-y-6">
                        <div className="space-y-12 relative sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] before:dark:bg-violet-600">
                                <time className="text-xl tracking-wide uppercase dark:text-gray-600">January 2020</time>
                                <h3 className="text-2xl font-semibold tracking-wide">Fatikchhari Government College</h3>
                                <h4 className="text-xl font-semibold">Higher Secondary School Certificate (HSC)</h4>
                                <p className="mt-3">Group: Commerce</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] before:dark:bg-violet-600">
                                <time className="text-xl tracking-wide uppercase dark:text-gray-600">January 2017</time>
                                <h3 className="text-2xl font-semibold tracking-wide">Tintahari High School</h3>
                                <h4 className="text-xl font-semibold">Secondary School Certificate (SSC)</h4>
                                <p className="mt-3">Group: Commerce</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="container max-w-5xl px-4 py-10 mx-auto">
                <div className="text-center mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:dark:bg-violet-600">
                    <h3 className="text-3xl font-semibold">My Skills</h3>
                    <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">Technologies I Work With</span>
                </div>

                <SkillSection title="Frontend Technologies" tools={frontendTechs} />
                <SkillSection title="Backend Technologies" tools={backendTechs} />
                <SkillSection title="Authentication & Security" tools={authTools} />
                <SkillSection title="Version Control & Deployment" tools={versionControl} />
                <SkillSection title="Other Tools" tools={otherTools} />

                {/* SEO Text */}
                <div className="mt-10">
                    <h3 className="text-2xl font-semibold mb-4">SEO & Analytics Tools</h3>
                    <p className="text-gray-700">
                        SEO best practices, Meta Tags, Google Search Console, Google Analytics, Structured Data (Schema Markup)
                    </p>
                </div>
            </section>
            <Contact></Contact>
        </div>
    );
};

export default MoreAboutMe;
