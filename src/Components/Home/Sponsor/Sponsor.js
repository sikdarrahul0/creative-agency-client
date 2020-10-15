import React from 'react';
import sponsorImg from '../../../data/sponsorImg';
import './sponsor.css';

const Sponsor = () => {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                {
                    sponsorImg.map(img =>(
                        <div className="col-md-2 col-sm-5 mx-1">
                            <img className="sponsor-img" src={img} alt="sponsor-logo"/>
                        </div>
                    ))
                }
        </div>
        </div>
    );
};

export default Sponsor;