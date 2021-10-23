import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image1 from "../../assets/images/slider1.png";
import Image2 from "../../assets/images/slider2.png";
import Image3 from "../../assets/images/slider3.png";
import Image4 from "../../assets/images/slider1.png";

const Images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image2,
  Image3,
  Image4,
  Image2,
  Image3,
  Image2,
  Image3,
];

const Index = () => {
  return (
    <section className="slider bg-secondary py-24">
      <div className="container">
        <div>
          <h2 className="text-primary text-center text-3xl md:text-4xl font-semibold mb-20">
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
  <div>
    <OwlCarousel className="owl-carousel  owl-theme" {...options}>
      {Images.map((item, i) => (
        <div key={i}>
          <img src={item} alt="" />
        </div>
      ))}
    </OwlCarousel>
  </div>
);
