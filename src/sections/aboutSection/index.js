import Img1 from "../../assets/images/bg-util1.png";
import Img2 from "../../assets/images/bg-util2.png";
import Img3 from "../../assets/images/bg-util3.png";
import Img4 from "../../assets/images/bg-util5.png";
import Img5 from "../../assets/images/bg-util6.svg";
const Index = () => {
  return (
    <section className="bg-secondary about text-center">
      <div className="container  py-20 md:py-28 relative">
        <img src={Img1} alt="" className="util1 animate-spin-slow" />
        <img src={Img2} alt="" className="util2 animate-spin-slow" />
        <img src={Img3} alt="" className="util3 animate-bounce" />
        <img src={Img4} alt="" className="util4 animate-pulse" />
        <img src={Img5} alt="" className="util5" />
        <h3
          className="text-primary font-semibold text-3xl md:text-4xl mb-10 lg:mb-28"
          data-aos="fade-down"
        >
          ABOUT US
        </h3>
        <div data-aos="fade-down">
          <p className="text-sm md:text-lg md:mx-10 lg:mx-20">
            The Guardians team is comprised of marketers, designers, and
            streamers from around the world. We have built and worked with many
            big names in and out of crypto + NFT’s.
          </p>
          <p className="text-sm mt-3 md:text-lg md:mx-10 lg:mx-20">
            Our mission as Guardians is building a community of holders and
            making sure that we provide them with some of the greatest benefits
            possible, including 3D figures, posters, merch, and partnerships
            with other projects in the metaverse. You can read about this more
            in our roadmap. Guardians is just the start of our long list of
            plans.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
