import React from 'react';

const Services = () => {
        return (
            <section className="service-one" id="features">
                <div className="container">
                    <div className="block-title text-center">
                        <span className="block-title__bubbles"></span>
                        <h3>Add the features or advanatges of your business</h3>
                    </div>
                    <div className="row">
                        <div className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
                             data-wow-delay="000ms">
                            <div className="service-one__single">
                                <i className="zimed-icon-responsive"></i>
                                <h3>Feature 1</h3>
                            </div>
                        </div>

                        <div className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
                             data-wow-delay="100ms">
                            <div className="service-one__single">
                                <i className="zimed-icon-computer-graphic"></i>
                                <h3>Feature 2</h3>
                            </div>

                        </div>

                        <div className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
                             data-wow-delay="200ms">
                            <div className="service-one__single">
                                <i className="zimed-icon-development1"></i>
                                <h3>Feature 3</h3>
                            </div>

                        </div>

                        <div className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
                             data-wow-delay="300ms">
                            <div className="service-one__single">
                                <i className="zimed-icon-development"></i>
                                <h3>Feature 4</h3>
                            </div>

                        </div>

                        <div className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
                             data-wow-delay="400ms">
                            <div className="service-one__single">
                                <i className="zimed-icon-development"></i>
                                <h3>Feature 5</h3>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

        )
}
export default Services;