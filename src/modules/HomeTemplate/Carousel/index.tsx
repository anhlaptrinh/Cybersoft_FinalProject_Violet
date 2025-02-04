import OwlCarousel from "react-owl-carousel";
import { motion } from "framer-motion";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const getOwlOptions = () => ({
  items: 1,
  loop: true,
  nav: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 2000,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>",
  ],
});

const getSlides = () => [
  "/img/slider-1.jpg",
  "/img/slider-2.jpg",
  "/img/slider-3.jpg",
];

const textAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const Carousel = () => {
  const options = getOwlOptions();
  const slides = getSlides();

  return (
    <section className="hero-slider">
      <div className="hero-items">
        <OwlCarousel className="owl-carousel owl-theme" {...options}>
          {slides.map((img, index) => (
            <div
              className="single-slider-item set-bg"
              key={index}
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <motion.h1
                      initial="hidden"
                      animate="visible"
                      variants={textAnimation}
                      className="animated fadeIn"
                    >
                      2024
                    </motion.h1>
                    <motion.h2
                      initial="hidden"
                      animate="visible"
                      variants={textAnimation}
                      className="animated fadeIn"
                      
                    >
                      Lookbook.
                    </motion.h2>
                    <motion.a
                      href="#"
                      className="primary-btn animated fadeIn"
                      initial="hidden"
                      animate="visible"
                      variants={textAnimation}
                    >
                      See More
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Carousel;
