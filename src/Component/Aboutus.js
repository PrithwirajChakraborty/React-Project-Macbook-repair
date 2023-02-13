import React from 'react';
import { Button } from 'react-bootstrap';
import img1 from '../img/about.jpg';

export default function Aboutus() {
    return (
        <div id="about" className="section-b2">

            <div className='container'>
                <div className="row">

                    <div className="col-lg-5 col-md-6">
                        <div className="about-img">
                            <img src={img1} />
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-6">
                        <div className="about-content">
                            <h2>About Us</h2>
                            <p>
                                Ever faced the problem of a MacBook malfunctioning or stopped working suddenly, hampering your working?<br />
                                 We understand your pain of being stuck in between because of your faulty MacBook. No need to panic as we are here to serve you with a hassle free complete solution for your valuable Apple gadget.

                                MacBook Repair Kolkata aims to repair your Apple product with a group of certified technicians. Our repair center is capable of repairing even the oldest models of MacBooks, iPhones and iPads. All types of critical issues can be diagnosed and repaired by our best experts.

                                Here we are, giving solutions to any type of issue you are facing in no time. Our professional experts are well trained, skilled and highly knowledgeable to provide a quick and complete solution for your MacBook Air / MacBook Pro Laptops along with iPhones and iPads. With a lot of happy customers, we are well known for our fast, reliable, and affordable services.

                                We provide a one stop solution for your problems like display screen, keyboard, camera, motherboard, and so on, along with software malfunctioning. With trusted service quality and experts, your valuable MacBook will be repaired with care.  <br /> <br /> <br />
                                <b style={{ fontSize: "1.7" }}>We are just a CLICK away to serve you.</b>
                            </p>
                            <div>
                                <Button className='info'>BOOK A SERVICE</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
