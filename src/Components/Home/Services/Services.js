import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Services = () => {
    const [serviceInfo, setServiceInfo] = useState([]);
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    useEffect(()=>{
        fetch('https://radiant-beyond-73631.herokuapp.com/getService')
        .then(res => res.json())
        .then(data => setServiceInfo(data))
        },[])
        
    return (
        
        <section className="container text-center">
            <h3 className="my-3">Provide awesome <span style={{color: '#7AB259'}}>services</span></h3>
            <div className="row my-5 pt-3">
                {
                    serviceInfo.map(info =>(
                        <div className="col-md-4">
                           <Link className="link-design" to="/mainPanel"> <div className="service-card">
                            <animated.div
                                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                style={{ transform: props.xys.interpolate(trans) }}
                                >
                                <img src={info.img} alt="service-img"/>
                                </animated.div>
                                <h4>{info.title}</h4>
                                <p className="lead">{info.description}</p>
                            </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Services;