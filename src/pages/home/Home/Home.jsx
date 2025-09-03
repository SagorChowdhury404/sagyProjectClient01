import React from 'react';
import TopBanner from '../headerBanarPage/TopBanner';
import CategoryList from '../../categoryList/CategoryList';
import AboutMe from '../../aboutMe/AboutMe';
import Contact from '../../shared/contact/Contact';
import FaqComponents from '../../../component/FaqComponents';
import Review from '../../../component/Review';
import Newsletter from '../../../component/Newsletter';
import HomeProject from '../../HomeProjects/HomeProject';
import { Helmet } from 'react-helmet-async';
import Blogs from '../../BlogPages/Blogs';
import WorkWithClient from '../../workwith/WorkWithClient';


const Home = () => {
    return (
        <div>
            <Helmet> <title>Home pages </title> </Helmet>
            <TopBanner></TopBanner>
            <CategoryList></CategoryList>
            <AboutMe></AboutMe>
            <HomeProject></HomeProject>



            <Newsletter></Newsletter>
            <Blogs></Blogs>
            <WorkWithClient></WorkWithClient>
            <FaqComponents></FaqComponents>
            <Contact></Contact>
            <Review></Review>
        </div>
    );
};

export default Home;