import React from 'react';
import Banner from './Banner/Banner';
import Course from './Course/Course';
import CustomNav from './CustomNav/CustomNav';
import Events from './Events/Events';
import Blog from './Blog/Blog';
import ContactUs from './ContactUs/ContactUs';
import Teacher from './Teacher/Teacher';
import Footer from './Footer/Footer';


const Home = () => {
    return (
        <div>
            <CustomNav />
            <Banner/>
            <Course/>
            <Events/>
            <Blog/>
            <ContactUs />
            <Teacher/>
            <Footer/>
        </div>
    );
};

export default Home;