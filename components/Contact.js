import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

const Contact = () => {
    const handleSelect=(e)=>{
        console.log(e);
      }
    return (        
        <section className="contact-one" id="contact">
            <img src="/assets/images/shapes/contact-shape-1.png" alt="" className="contact-one__shape-1"/>
            <img src="/assets/images/shapes/contact-shape-2.png" alt="" className="contact-one__shape-2"/>
            <img src="/assets/images/shapes/contact-shape-3.png" alt="" className="contact-one__shape-3"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-one__content">
                            <div className="contact-one__infos">
                                <div className="block-title">
                                    <span className="block-title__bubbles"></span><br />
                                </div>
                                <div className="contact-one__infos-single">
                                    <div className="contact-one__infos-icon">
                                        <i className="zimed-icon-placeholder"></i>
                                    </div>
                                    <div className="contact-one__infos-content">
                                        <h3>Addresss</h3>
                                        <p>Lorem Ipsum <br/> America
                                        </p>
                                    </div>
                                </div>
                                <div className="contact-one__infos-single">
                                    <div className="contact-one__infos-icon">
                                        <i className="zimed-icon-message"></i>
                                    </div>
                                    <div className="contact-one__infos-content">
                                        <h3>Email</h3>
                                        <p><a href="mailto:needhelp@zimed.com">lorem@impsum.com</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="contact-one__infos-single">
                                    <div className="contact-one__infos-icon">
                                        <i className="zimed-icon-phone-call"></i>
                                    </div>
                                    <div className="contact-one__infos-content">
                                        <h3>Phone</h3>
                                        <p><a href="tel:666-888-0000">666 888 0000</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-one__form-wrap">
                            <div className="block-title">
                                <span className="block-title__bubbles"></span>
                                <h3>Contact Us</h3>
                            </div>
     
                            <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="email" placeholder="Lorem Ipsum" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="email" placeholder="98xxxxxxxx" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Select Business State</Form.Label>
                                    <Form.Control as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Recharge Agent</Form.Label>
                                    <Form.Control as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>

                            <div className="result"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;