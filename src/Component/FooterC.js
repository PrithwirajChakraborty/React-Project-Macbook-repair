import React from 'react';

export default function FooterC() {
    return (
        <>
            <footer id="footer" className="section-b3">
                <div className="footer-top">
                    <div className="container">

                        <div className="row">

                            <div className="col-lg-6">

                                <div className="row">

                                    <div className="col-sm-6">

                                        <div className="footer-info">
                                            <h3>Macbook Repair Kolkata</h3>
                                            <p>Macbook Repair Kolkata provides trusted instant service on <b>
                                                ipad, iphone, macbook</b><br />
                                                Expertised in <b>same day repairing service</b> for any issue with warranty.
                                            </p>
                                        </div>

                                        <div className="footer-newsletter">
                                            <h4>Our Mission</h4>
                                            <p>We are here to build the best on-demand technical service providing company.</p>
                                            <form action="" method="post">
                                                <input type="email" name="email" />
                                                <input type="submit" value="Subscribe" />
                                            </form>
                                        </div>

                                    </div>

                                    <div className="col-sm-6 p-5">
                                        <div className="footer-links">
                                            <h4>Contact Us</h4>
                                            <p>
                                                Corporate: <br />

                                                BN4, Webel IT Park,<br />
                                                Saltlake, Kolkata 91
                                            </p>
                                            <p>
                                                Workshop:<br />

                                                19A Chandni Chowck Street<br />
                                                Near Sabbir Hotel<br />
                                                Kolkata, IND 700072<br /><br />
                                                <strong>Phone:</strong> +91 6292222786<br />
                                                <strong>Email:</strong> info@mackbookrepairkolkata.com<br />
                                            </p>
                                        </div>

                                        <div className="social-links">
                                            <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                                            <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                                            <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                                            <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="col-lg-6">

                                <div className="form">

                                    <h4>Send us a message</h4>
                                    <p><i> Any Issue? </i><br /><br />Feel free to contact</p>

                                    <form method="POST" action="#" >

                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input type="number" className="form-control" name="number" id="subject"
                                                placeholder="Call Back Contact Number " />
                                        </div>

                                        <div className="form-group">
                                            <textarea className="form-control" name="message" rows="5"
                                                placeholder="Message"></textarea>
                                        </div>
                                        <button type="submit" name="submit" className="btn btn-dark">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong>Macbook Repair Kolkata</strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="#"><b>Macbook Repair Kolkata</b></a>
                    </div>
                </div>
            </footer>
        </>
    );
}

