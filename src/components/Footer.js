import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer id="main-footer" className="bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col text-center py-4">
                            <h3>
                                Final Pencil
                            </h3>
                            <p>
                                Copyright &copy;
                                <span id="year"></span>
                            </p>
                        </div>

                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer;