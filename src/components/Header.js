import React from 'react';

const Header = () => {
    return (
        <div>

            <div className="home-section">
                <div className="dark-overlay pt-3 ">
                    <img src={'https://i.imgur.com/kMU7XSV.png'} alt="logo" className="logo img-fluid" />
                    <div className="home-inner container">
                        <div className="row">
                            <div className="col-lg-8 mt-4">
                                <div className="display-4 d-none d-sm-block" id="header_content">
                                    Where Growing Car Dealerships & Future Team Members Connect
                            </div>
                                <div className="mt-5 pad-top font-top">
                                    <h2>
                                        The #1 Career Finder In The Automotive Industry That Saves Time, Energy, & Money!
                                </h2>
                                </div>
                                {/* <div className="h3 mt-4">
                                    Apply To 25+ Automotive Careers Faster Than You Can Drink Your Morning Coffee...
                            </div> */}

                                <div className="my-5 center-b">
                                    <button type="button" className="btn btn-success text-light btn-lg">Step Into A New Auto Career</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;


