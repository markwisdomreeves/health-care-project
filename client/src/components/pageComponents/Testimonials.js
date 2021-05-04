import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >

        <div>
          <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618681255/healthCare/testimonial-1_hqsojf.jpg" alt="" />
          <div className="myCarousel">
            <h3>Williams Toe</h3>
            <h4>Frontend Developer</h4>
            <p>
            lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century.
            </p>
          </div>
        </div>

        <div>
          <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618681255/healthCare/testimonial-2_yy4by8.jpg" alt="" />
          <div className="myCarousel">
            <h3>Dr. Amos Hommes</h3>
            <h4>Doctor</h4>
            <p>
            lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century.
            </p>
          </div>
        </div>

        <div>
          <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618681255/healthCare/testimonial-3_tfogab.jpg" alt="" />
          <div className="myCarousel">
            <h3>Peter Brown</h3>
            <h4>Backend Developer</h4>
            <p>
            lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century.
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}


export default  Testimonials;
