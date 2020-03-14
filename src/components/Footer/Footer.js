import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="col-12">
          <h1 className="heading-text">To Recieve Special Offers</h1>
          <section className="recaptch">
            <InputGroup className="email-input">
              <FormControl
                className="form-input"
                placeholder="Email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="primary" className="submit-btn">
                  Submit
                </Button>
              </InputGroup.Append>

              <img
                className="recaptcha-img"
                src={require('../../assets/recaptcha.png')}
                alt="img"
              />
            </InputGroup>
            <span className="small-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. it amet
              <br />
              consectetur adipisicing consectetur adipisicing
            </span>
          </section>

          <hr />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-links">
                <h3 className="heading-text">Frequent asked questions</h3>
                <ul>
                  <li>
                    <a href="#">Terms & conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                  <li>
                    <a href="#">Delivary Policy</a>
                  </li>
                  <li>
                    <a href="#">Returns Policy</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="footer-links">
                <h3 className="heading-text">Quick Links</h3>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">All Products</a>
                  </li>
                  <li>
                    <a href="#">Feartured Products</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="footer-links">
                <h3 className="heading-text">Follow Us on</h3>
                <ul>
                  <li>
                    <img
                      src={require('../../assets/fb.png')}
                      alt="icon"
                      className="social-icons"
                    />
                    <a href="#">TVMALLSA</a>
                  </li>
                  <li className="social-links">
                    <img
                      src={require('../../assets/fb.png')}
                      alt="icon"
                      className="social-icons"
                    />
                    <a href="#">TVMALLSA</a>
                  </li>
                  <li>
                    <img
                      src={require('../../assets/fb.png')}
                      alt="icon"
                      className="social-icons"
                    />
                    <a href="#">TVmall za</a>
                  </li>
                  <li>
                    <img
                      src={require('../../assets/fb.png')}
                      alt="icon"
                      className="social-icons"
                    />
                    <a href="#">Tv Mall sa</a>
                  </li>
                  <li>
                    <img
                      src={require('../../assets/fb.png')}
                      alt="icon"
                      className="social-icons"
                    />
                    <a href="#">Tv Mall</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-links">
                <h3 className="heading-text">Contact Us</h3>
                <p className="contact-detail">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <span className="contact-detail">
                  1111111 <br />
                </span>
                <span className="contact-detail">info@tvmall.co</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="payment-section">
        <div className="payment-container">
          <div>
            <h4 className="payment-title">WE ACCEPT</h4>
            <img
              className="payment-logo"
              src={require('../../assets/payment.png')}
              alt="payment"
            />
          </div>
          <div className="logistic-content">
            <h4 className="payment-title">Logistic partner</h4>
            <img
              className="logistic-logo"
              src={require('../../assets/logistic.png')}
              alt="logistic partners"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
