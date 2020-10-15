import React from 'react';
import Contact from '../Contact/Contact';
import FeedBack from '../FeedBack/FeedBack';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Sponsor from '../Sponsor/Sponsor';
import WorkSlide from '../WorkSlide/WorkSlide';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Sponsor></Sponsor>
            <Services></Services>
            <WorkSlide></WorkSlide>
            <FeedBack></FeedBack>
            <Contact></Contact>
        </div>
    );
};

export default Home;