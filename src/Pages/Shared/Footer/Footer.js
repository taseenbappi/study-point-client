import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="container-fluid bg-dark ">
            <div className="row justify-content-center align-items-center p-5 ">
                <div className="col-12 col-lg-6 col-md-6 col-sm-12  text-center ">
                    <h2 className="footer-title">Study Point</h2>
                    <div className="text-light ">
                        <i className="fab fa-facebook-square p-1 fs-3"></i>
                        <i className="fab fa-twitter-square p-1 fs-3"></i>
                        <i className="fab fa-google-plus-square p-1 fs-3"></i>
                        <i className="fab fa-linkedin p-1 fs-3"></i>
                    </div>
                    <p className="text-light">┬ęcopyrights since - 2021</p>
                    <a className="text-decoration-none text-light" target="_blank" href="https://www.linkedin.com/in/taseenbappi/" rel="noreferrer">Developer: Taseen Bappi</a>
                </div>
                {/* <div className="col-12 col-lg-6 col-md-6 col-sm-12 ">

                </div> */}
            </div>

        </div>
    );
};

export default Footer;