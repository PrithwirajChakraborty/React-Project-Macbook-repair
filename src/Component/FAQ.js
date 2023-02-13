import React from 'react';
import { Accordion, Container } from 'react-bootstrap';


export default function FAQ() {
    return (
        <>
            <h1 className='text-center pt-5'><b>Frequently asked Quistions</b></h1>
            <h5 className='text-center'>How can we help you ?</h5>
            <Container className='p-3'>
            <h4 className='pl-5 pt-3'><b>MacBook Repair Kolkata</b></h4>
            <h5 className='p-5'>Ever faced the problem of a MacBook malfunctioning or stopped working suddenly, hampering your working? We understand your pain of being stuck in between because of your faulty MacBook. No need to panic as we are here to serve you with a hassle free complete solution for your valuable Apple gadget. <br />
            <br />
                MacBook Repair Kolkata aims to repair your Apple product with a group of certified technicians. Our repair center is capable of repairing even the oldest models of MacBooks, iPhones and iPads. All types of critical issues can be diagnosed and repaired by our best experts.<br />
                <br />
                Here we are, giving solutions to any type of issue you are facing in no time. Our professional experts are well trained, skilled and highly knowledgeable to provide a quick and complete solution for your MacBook Air / MacBook Pro Laptops along with iPhones and iPads. With a lot of happy customers, we are well known for our fast, reliable, and affordable services.<br />
                <br />
                We provide a one stop solution for your problems like display screen, keyboard, camera, motherboard, and so on, along with software malfunctioning. With trusted service quality and experts, your valuable MacBook will be repaired with care.</h5>
            </Container>

            <Container className='p-5'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Time required for repairing?</b></Accordion.Header>
                        <Accordion.Body>
                            Understanding your delay in work, we require 24 to 48 hours at most to repair your valuable Apple device after the delivery of your product.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><b>What's the repair cost?</b></Accordion.Header>
                        <Accordion.Body>
                            We believe in quality, not in price. Make an enquiry for quotation.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><b>Can a cracked/damaged laptop screen be repaired?</b></Accordion.Header>
                        <Accordion.Body>
                            Definitely, your laptop screen can be replaced in no time.  We have most of the laptop screens in stock, so have your problem solved without any hassle.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><b>What about data protection? Is it secured?</b></Accordion.Header>
                        <Accordion.Body>
                            Your data is absolutely protected as your data is our top most priority. We follow the Data Protection Act and if we have any data, that will be strictly confidential.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                        <Accordion.Header><b>Why choose MacBook Repair Kolkata?</b></Accordion.Header>
                        <Accordion.Body>
                            MacBook Repair Kolkata is known for its quality service with efficiency. It understands your need for your electronic buddy.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header><b>What is the replacement policy for MacBook’s genuine parts?</b></Accordion.Header>
                        <Accordion.Body>
                            We take utmost care in replacing the genuine and authentic parts. And we make sure that it’s original.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </>
    );
}
