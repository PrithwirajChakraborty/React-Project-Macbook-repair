import React from 'react';
import { Container } from 'react-bootstrap';


export default function Book() {
  return (
    <>
      <main id="main">
        <div className="section-b2">
          <br /><br />
          <header className="section-header">
            <h3>Book An Appointment</h3>
            <p>Macbook Repair Kolkata provides trusted instant service on <b>
              ipad, iphone,  macbook, imac.</b><br />
              Expertised in <b>same day repairing service</b> for any issue with warranty.
            </p>
          </header>
          <Container>
            <div className="signin">
              <main className="form-signin">
                <form method="POST" action="#">

                  <div className="mb-3">
                    <label for="exampleInputName" className="form-label">Enter Your Name</label>
                    <input type="text" className="form-control" name="name" id="exampleInputName" placeholder="Enter Your Name"
                      aria-describedby="nameHelp" />
                  </div>

                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" id="exampleInputEmail1"
                      placeholder="Enter Your Email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>

                  <div className="mb-3">
                    <label for="exampleInputNumber" className="form-label">Phone Number</label>
                    <input type="number" className="form-control" name="number" id="exampleInputNumber"
                      placeholder="Enter Your Phone Number" aria-describedby="numberHelp" />
                  </div>

                  <div className="mb-3">
                    <select className="form-control" name="problem" aria-label="Default select example">
                      <option selected>iphone</option>
                      <option value="1">Mackbook</option>
                      <option value="2">Mackbook</option>
                      <option value="3">iMac</option>
                      <option value="4">Others</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label for="exampleInputPostal" className="form-label">Postal Code</label>
                    <input type="number" className="form-control" name="postal" id="exampleInputPostal" placeholder="Postal Code"
                      aria-describedby="postalHelp" />
                  </div>

                  <div className="form-floating">
                    <textarea className="form-control" name="comment" placeholder="Describe your issue here"
                      id="floatingTextarea"></textarea>
                  </div>

                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">By availing this service, I agree with your terms and
                      conditions.</label>
                  </div>
                  <button type="submit" name="submit" className="btn btn-primary">Book Now</button>
                </form>
                <br /><br />
              </main>
            </div>
          </Container>
        </div>
      </main>


    </>
  );
}
