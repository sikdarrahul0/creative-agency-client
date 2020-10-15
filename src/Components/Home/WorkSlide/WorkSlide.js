import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import workImg from '../../../data/workImg';
import './WorkSlide.css';

const WorkSlide = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    return (
        <section id="portfolio" className="work-slide py-5">
            <h3 className="text-white text-center mt-3 mb-5">Here are some of <span style={{color: '#7AB259'}}>our works</span></h3>
            <div className="container carousel-box">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {
                    workImg.map(img =>(
                        <Carousel.Item>
                                <img
                                className="carousel-img d-block w-100"
                                src={img}
                                alt="First slide"
                                />
                       </Carousel.Item>
                    ))
                }
           
            </Carousel>
            </div>
        </section>
    );
};

export default WorkSlide;