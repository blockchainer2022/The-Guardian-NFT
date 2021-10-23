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
          data-aos="fade-up"
        >
          Who We Are?
        </h3>
        <p className="text-sm md:text-lg md:mx-10 lg:mx-20" data-aos="fade-up">
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
        </p>
      </div>
    </section>
  );
};

export default Index;
