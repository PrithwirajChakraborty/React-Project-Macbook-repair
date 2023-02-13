import React from 'react';
import { Button } from 'react-bootstrap';

export default function Intro() {
    return (
        <>
            <section id="intro" className="clearfix">
                <div className="container d-flex h-100">
                    <div className="row justify-content-center align-self-center">
                        <div className="col-md-6 intro-info order-md-first order-last">
                            <h4>We are here to fix your MacBook,iMac,<br/>iPhone,iPad  & recovered data.<br/><span> Get 20%
                                off on your first repair
                            </span></h4>
                                <div>
                                    <Button variant="dark">Our Service</Button>
                                </div>
                            </div>

                                <div className="col-md-6 intro-img order-md-last order-first">
                                    <img src="intro-img.svg" alt="" className="img-fluid"/>
                                </div>
                        </div>

                    </div>
            </section>
        </>
    );
}
