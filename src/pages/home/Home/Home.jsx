import React from 'react';
import TopBanner from '../headerBanarPage/TopBanner';
import CategoryList from '../../categoryList/CategoryList';
import AboutMe from '../../aboutMe/AboutMe';
import Contact from '../../shared/contact/Contact';
import FaqComponents from '../../../component/FaqComponents';
import Review from '../../../component/Review';
import HomeProject from '../../HomeProjects/HomeProject';
import { Helmet } from 'react-helmet-async';
import Blogs from '../../BlogPages/Blogs/Blogs';


const Home = () => {
    return (
        <div>
            <Helmet> <title>Home pages </title> </Helmet>
            <TopBanner></TopBanner>
            <CategoryList></CategoryList>
            <AboutMe></AboutMe>
            <FaqComponents></FaqComponents>
            <HomeProject></HomeProject>
            <Review></Review>
            {/* <Newsletter></Newsletter> */}
            <Blogs></Blogs>
            {/* <WorkWithClient></WorkWithClient> */}

            <Contact></Contact>

        </div>
    );
};

export default Home;