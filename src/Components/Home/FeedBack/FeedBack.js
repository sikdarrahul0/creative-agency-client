import React, { useEffect, useState } from 'react';
import './FeedBack.css';

const FeedBack = () => {
    const[feedback, setFeedback] = useState([]);
    useEffect(()=>{
        fetch('https://radiant-beyond-73631.herokuapp.com/getReview')
        .then(res => res.json())
        .then(data => setFeedback(data))
        },[])
    return (
        <section className="container ">
            <h3 className="my-5 py-2 text-center">Clients <span style={{color: '#7AB259'}}> Feedback </span></h3>
            <div className="row mb-5">
            {
                feedback.map(data =>(
                    <div className="col-md-4">
                        <div className="p-4 mx-1 review-card">
                            <div className="d-flex"> 
                            <div>
                                  <img className="review-img" src={data.img} alt="review-img"/>
                            </div>
                            <div>
                                  <h4>{data.name}</h4>
                                  <p><strong>{data.designation}</strong></p>
                            </div>
                            </div>
                            <p className="lead">{data.review}</p>
                        </div>
                    </div>
                ))
            }
            </div>
        </section>
    );
};

export default FeedBack;