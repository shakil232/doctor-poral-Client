import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Blog from '../Blog/Blog/Blog';
import Contact from '../Contact/Contact/Contact';
import Doctors from '../Doctors/Doctors/Doctors';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import MakeAppoinment from '../MakeAppointment/MakeAppoinment';
import Servicess from '../Servicess/Servicess/Servicess';
import Testimonial from '../Testimonial/Testimonial/Testimonial';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Servicess></Servicess>
            <FeaturedService></FeaturedService>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;