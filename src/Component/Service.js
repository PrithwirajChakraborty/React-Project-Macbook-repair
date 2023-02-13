import React from 'react';
import img1 from '../img/iphone.jpeg';
import img2 from '../img/ipad.jpeg';
import img6 from '../img/mackbook.jpg';

export default function Service() {
    return (
        <>
            <div id="services" className="section-bg">
                <div className="container">

                    <header className="section-header">
                        <h3>Macbook Repair Kolkata</h3>
                        <p>Macbook Repair Kolkata provides trusted instant service on <b>
                            ipad, iphone,macbook.</b><br />
                            Expertised in <b>same day repairing service</b> for any issue with warranty.</p>
                    </header>

                    <div className="row" >
                        
                            <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s" >
                                <div className="box" >
                                    <h4 className="title">iphone</h4>
                                    <img src={img1} height="150" width="150" />
                                </div>
                            </div>
                        
                        <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                            <div className="box">

                                <h4 className="title">ipad</h4>
                                <img src={img2} height="150" width="150" />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
                            <div className="box">
                                <h4 className="title">Macbook</h4>
                                <img src={img6} height="150" width="150" />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}
