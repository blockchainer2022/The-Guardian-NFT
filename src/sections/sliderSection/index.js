import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image1 from "../../assets/images/slider1.png";
import Image2 from "../../assets/images/slider2.png";
import Image3 from "../../assets/images/slider3.png";
import Image4 from "../../assets/images/slider4.png";
import Image5 from "../../assets/images/slider5.png";
import Image6 from "../../assets/images/slider6.png";
import Image7 from "../../assets/images/slider7.png";
import Image8 from "../../assets/images/slider8.png";
import Image9 from "../../assets/images/slider9.png";
import Image10 from "../../assets/images/slider10.png";
import Image11 from "../../assets/images/slider11.png";
import Image12 from "../../assets/images/slider12.png";
import Image13 from "../../assets/images/slider13.png";
import Image14 from "../../assets/images/slider14.png";
import Image15 from "../../assets/images/slider15.png";

const Images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
  Image13,
  Image14,
  Image15,
];

const Index = () => {
  return (
    <section className="slider bg-secondary py-24">
      <div className="container">
        <div>
          <h2
            className="text-primary text-center text-3xl md:text-4xl font-semibold mb-20"
            data-aos="fade-up"
          >
            Our Guardian
          </h2>
        </div>

        <CustomSlider />
      </div>
    </section>
  );
};

export default Index;

const options = {
  margin: 20,
  responsiveClass: true,
  dots: true,
  autoplay: true,
  smartSpeed: 1000,
  nav: true,
  navText: [
    '<i class="far fa-arrow-alt-circle-left text-primary"></i>',
    '<i class="far fa-arrow-alt-circle-right text-primary"></i>',
  ],
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 2,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 3.3,
    },
  },
};
const CustomSlider = () => (
  <div data-aos="fade-up">
    <OwlCarousel className="owl-carousel  owl-theme" {...options}>
      {Images.map((item, i) => (
        <div key={i}>
          <img src={item} alt="" />
        </div>
      ))}
    </OwlCarousel>
  </div>
);
