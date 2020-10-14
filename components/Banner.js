import React from 'react';


const Banner = () => {

    return(
        <section className="banner-one" id="banner" style={{backgroundImage: `url(/assets/images/background/banner-bg-1-1.png)`}}>
            <img src="/assets/images/shapes/banner-shapes-1-4.png" alt="" className="banner-one__shape-4" />
            <img src="/assets/images/shapes/banner-shapes-1-5.png" alt="" className="banner-one__shape-5" />
            <img src="/assets/images/shapes/banner-shapes-1-7.png" alt="" className="banner-one__shape-7" />

            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="banner-one__content">
                            <p className="banner-one__tag-line">Welcome to Our Business</p>
                            <h3>We help achieve <br/> biggest goals</h3>
                        </div>
                    </div>
                </div>
            </div>
            </section>
    )
}
export default Banner;