import React from 'react';

const Section1s = () => {
    return (
        <div className="text-dark py-5">
            <div className="container">
                <div className="display-4 text-center" id="header_content1">
                    For Dedicated Dealers
            </div>
                <div className="row py-5">
                    <div className="col-md-6 order-2">
                        <img src={'https://i.imgur.com/WxPuwFM.jpg'} alt="section" className="img-fluid rounded mb-3" />
                    </div>
                    <div className="col-md-6 order-1">
                        <div className="d-flex">
                            <div className="p-2 align-self-start">
                                <i className="fas fa-check fa-sm"></i>
                            </div>
                            <div className="p-2 align-self-end">
                                <span className="font-weight-bold">Your Free Marketplace For Automotive Talent:</span> Your business will never slow down from lack of awesome team members ever again. Find talented employees quicker & cheaper than any other option available!
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="p-2 align-self-start">
                                <i className="fas fa-check fa-sm"></i>
                            </div>
                            <div className="p-2 align-self-end">
                                <span className="font-weight-bold">More Qualified Candidates: </span>
                            Fuel & scale your dealership to the next level when you have your entire hiring process down to a time-saving-science!</div>
                        </div>
                        <div className="d-flex">
                            <div className="p-2 align-self-start">
                                <i className="fas fa-check fa-sm"></i>
                            </div>
                            <div className="p-2 align-self-end">
                                <span className="font-weight-bold">Browse Through Candidates For Free: </span>
                                Look through our entire marketplace of Automotive Candidates to find the perfect match for your Dealership. All skill-sets, experience levels & positions you need to grow further than ever, all for free.</div>
                        </div>

                    </div>

                </div>
                <div className="button-center">
                    <button type="button" className="btn btn-success btn-lg">Start Here</button>
                </div>
            </div>

        </div>
    );
}

export default Section1s;


