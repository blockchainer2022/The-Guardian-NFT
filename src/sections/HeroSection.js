import BannerImg from "../assets/images/banner-img.png";
import Img1 from "../assets/images/bg-util1.png";
import Img2 from "../assets/images/bg-util2.png";
import Img3 from "../assets/images/bg-util3.png";
import Img4 from "../assets/images/bg-util4.png";
const HeroSection = () => {
  return (
    <section className="hero py-20 pb-28 bg-secondary ">
      <div className="container md:flex md:flex-row-reverse md:items-center">
        <div className="md:w-1/2  ">
          <div
            className="mb-20 banner-wrapper mx-auto md:mx-0 md:ml-auto relative "
            data-aos="fade-in"
            data-aos-delay="500"
          >
            <img src={BannerImg} alt="" className="banner-img" />
            <img
              src={Img4}
              alt=""
              className="absolute hidden md:block img4 animate-pulse"
            />
          </div>
        </div>
        <div className="text-center md:w-1/2 hero-left-side">
          <img src={Img1} alt="" className="img1  animate-spin-slow" />
          <img src={Img2} alt="" className="img2 animate-spin-slow" />
          <img src={Img3} alt="" className="img3 animate-bounce" />
          <h1
            className="text-primary font-semibold text-3xl sm:text-4xl md:text-5xl"
            data-aos="fade-in"
          >
            The Guardian NFT
          </h1>
          <p
            className="my-8 md:my-10 text-sm sm:text-base md:text-lg font-normal sm:mx-10"
            data-aos="fade-in"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="px-6 py-4 bg-primary" data-aos="fade-down">
            View on Opensea
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
