import React from 'react';
import '../../App.css';
import HeroImg from '../../assets/HeroImg.jpg';


const Hero = (props) => {
  return (
    <section className="py-5 hero-bg">
      <div className="container">
        <div className="row align-items-center">

          {/* Text Content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h4 className="text-secondary fw-semibold mb-2">Hello, I'm</h4>
            <h1 className="fw-bold display-4">MD. ABDUL HALIM</h1>
            <p className="mt-3 text-dark fs-5">
                A dedicated Digital Marketing Expert specializing in SEO, YouTube Channel Optimization, Social Media Marketing, and Content Strategy. Focused on crafting smart, data-driven marketing solutions that boost visibility, attract the right audience, and convert traffic into real business growth. Every strategy is designed with one goal in mind: delivering measurable results and helping your brand stand out in the digital world.
            </p>

            <div className="mt-4 d-flex gap-3">
              <a href = "https://api.whatsapp.com/send?phone=8801947349917&text=%22Hey%2C%20Welcome%20to%20my%20whatsapp%20account%22" className="btn btn-dark px-4 py-2">Hire Me</a>
            </div>
          </div>

          {/* Image */}
          <div className="col-lg-6 text-center">
            <img 
              src={HeroImg} 
              alt="Hero" 
              className="img-fluid rounded-3 hero-img-style" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
