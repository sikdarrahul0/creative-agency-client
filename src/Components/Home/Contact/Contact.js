import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="Contuct-Us" className="contact-part">
            <div className="container">
            <div className="row">
                <div className="col-lg-5 mb-5">
                    <h2 className="mb-3 font-weight-bold">Let us handle your project, professionally.</h2>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div className="col-lg-6 ml-lg-4">
                    <input className="form-control py-3" type="Email" placeholder="Your email address"/> <br/>
                    <input className="form-control py-3" type="text" placeholder="Your name/ company's name"/> <br/>
                    <textarea className="form-control" rows="7" cols="80" placeholder="Your message"></textarea>
                    <button className="px-4 mt-2 btn btn-dark">Send</button>
                </div> 
            </div>
            </div>
            <p className="text-center mt-5 pt-4">copyright Rahul {new Date().getFullYear()}</p>
        </section>
    );
};

export default Contact;