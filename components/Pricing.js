import React,{ Component } from 'react';

export default class Pricing extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            month: true,
            year: false
        }
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(){
        const month = this.state.month;
        const year = this.state.year;

        if(month){
            this.setState({year: true, month: false})
        }
        if(year){
            this.setState({year: false, month: true})
        }


    }

    render(){
        return (

            <section className="pricing-one" id="pricing">
                <div className="container">
                    <div className="pricing-one__sep"></div>

                    <div className="block-title text-center">
                        <span className="block-title__bubbles"></span>
                        <p>Our Pricing Tables</p>
                        <h3>Choose Pricing Plans</h3>
                    </div>

                    <div className="tabed-content">
                        <div id="month" style={{ display: this.state.month ? 'block' : 'none'}}>
                            <div className="row">     

                                <div className="col-lg-12 wow fadeInRight" data-wow-duration="1500ms">
                                    <div className="pricing-one__single">
                                        <div className="pricing-one__inner">
                                            <img src="/assets/images/shapes/pricing-line-1-1.png" alt=""
                                                 className="pricing-one__line" />
                                                <img src="/assets/images/shapes/pricing-icon-1-3.png" alt=""
                                                     className="pricing-one__icon" />
                                                    <h3>$40.00</h3>
                                                    <p>Silver Pack</p>
                                                    <ul className="list-unstyled pricing-one__list">
                                                        <li><i className="fa fa-check"></i> Mobile - upto - 2.80%</li>
                                                        <li><i className="fa fa-check"></i> DTH    - upto - 2.94%</li>
                                                        <li><i className="fa fa-check"></i> Data Card -  upto - 2.59%</li>
                                                        <li><i className="fa fa-check"></i> Finance -   Rs. 299 -  Rs. 6299</li>
                                                        <li><i className="fa fa-check"></i> PAN -   Rs. 299 -  Rs. 100</li>
                                                        <li><i className="fa fa-check"></i> GST Registration -   Rs. 149</li>
                                                    </ul>
                                                    <a href="#contact" className="thm-btn pricing-one__btn">Get Started</a>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>          
                    </div>

                </div>
            </section>
        )
    }
}