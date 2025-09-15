import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/home/Home/Home";
import MoreAboutMe from "../pages/aboutMe/MoreAboutMe";
import Contact from "../pages/shared/contact/Contact";
import ProjectAll from "../pages/ProjectsPage/ProjectAll";
import Blogs from "../pages/BlogPages/Blogs";
import Services from "../pages/shared/services/Services";
import ProjectCardDetails from "../pages/HomeProjects/projectCardDetails/ProjectCardDetails";
import WebAppsDevelopment from "../pages/whatIDo/WebAppsDevelopment";
import LinkedinPages from "../pages/whatIDo/LinkedinPages";
import SeoPages from "../pages/whatIDo/SeoPages";



export const router = createBrowserRouter([
    {
        path: "",
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorPage />,
        children: [

            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/MoreAboutMe",
                element: <MoreAboutMe></MoreAboutMe>,
            },
            {
                path: "/WebAppsDevelopment",
                element: <WebAppsDevelopment></WebAppsDevelopment>,
            },
            {
                path: "/LinkedinPages",
                element: <LinkedinPages></LinkedinPages>,
            },
            {
                path: "/SeoPages",
                element: <SeoPages></SeoPages>,
            },

            {
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: "/projectAll",
                element: <ProjectAll ></ProjectAll>,
            },
            {
                path: "/project/:id",
                element: <ProjectCardDetails />,
                loader: async ({ params }) => {
                    // Example: fetch from local JSON (public/projects.json)
                    const res = await fetch("/projects.json");
                    const data = await res.json();

                    // find project by id
                    return data.find(p => p.id.toString() === params.id);
                },
            }
            ,
            {
                path: "/blogs",
                element: <Blogs ></Blogs>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: "/Services",
                element: <Services></Services>,
            },

        ]
    },
]);