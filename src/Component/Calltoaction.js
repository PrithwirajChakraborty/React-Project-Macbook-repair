import React from 'react';
import Carousel from "react-multi-carousel";
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';
import {  Button } from 'react-bootstrap';
import img1 from '../img/clent_review/review1.png';
import img2 from '../img/clent_review/review2.png';
import img3 from '../img/clent_review/review3.png';
import img4 from '../img/clent_review/review4.png';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function Calltoaction() {
    return (
        <>
        <MDBContainer className='p-5'>
        <Carousel responsive={responsive}>
            <div>
                <MDBCard style={{ maxWidth: '540px' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='4' className='pl-5'>
                            <MDBCardImage src={img1} alt='...' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>Kaushik Banerjee</MDBCardTitle>
                                <MDBCardText>
                                "Got my Macbook repaired from Macbook Repair Kolkata. Their handling of Macbook and experience of repairing was
                                    quite good."
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </div>
            <div>
                <MDBCard style={{ maxWidth: '540px' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='4' className='pl-5'>
                            <MDBCardImage src={img2} alt='...' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>Aditya raj</MDBCardTitle>
                                <MDBCardText>
                                "Very nice working shop..intelligent engineers. Keyboard, lcd and speakers replaced and working like a charm. Prices are reasonable and
                                    behaviour of the staff is very good."
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </div>
            <div>
                <MDBCard style={{ maxWidth: '540px' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='4' className='pl-5'>
                            <MDBCardImage src={img3} alt='...'  />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>Zhan</MDBCardTitle>
                                <MDBCardText>
                                "Facts:engineers and staffs are very good and humble and well behaved. They are very professional and
                                    values the customer and works at lowprice according to me."
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </div>
            <div>
                <MDBCard style={{ maxWidth: '540px' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='4' className='pl-5'>
                            <MDBCardImage src={img4} alt='...' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>Amit Kiran Pal</MDBCardTitle>
                                <MDBCardText>
                                "Best ever Macbook repairing shop in Kolkata. Cheap price and time taken to repair the Macbook is very
                                    less. Very friendly staffs and engineer guyz are so awesome.""
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </div>
        </Carousel>;
        </MDBContainer>

            <div id="call-to-action" class="wow fadeInUp">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-9 text-center text-lg-left">
                            <h3 class="cta-title">Do you want to sell your old iphone, ipad, Macbook?</h3>
                            <p class="cta-text"> We can help you in selling your device at best price in Kolkata</p>
                        </div>
                        <div class="col-lg-3 cta-btn-container text-center">
                            <Button className='align-middle'>Sell My Device</Button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
