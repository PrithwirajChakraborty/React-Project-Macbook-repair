import React from 'react';
import img1 from '../img/ipad2.jpeg';

export default function IPad() {
    return (
        <>
        <h1 className='text-center pt-5'><b>iPad Repair</b></h1>
            <div id="features">
                <div className="container">
                    <div className="row feature-item mt-5 pt-5">
                        <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
                            <img src={img1} className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
                            <h4>What we do</h4>
                            <p>
                            We have highly skilled certified technicians to take care of your electronic buddy. We offer the best service at an affordable rate. No worries, get your oldest to newest model of iPad repaired in on time.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}
