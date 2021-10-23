import FaqImage from "../../assets/images/Faq-img.png";
const Index = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container md:flex items-center flex-row-reverse">
        <div className="md:w-1/2">
          <div className="faq-img-wrapper mx-auto md:ml-auto mb-20">
            <img src={FaqImage} alt="" data-aos="fade-left" />
          </div>
        </div>
        <div
          className="md:w-1/2 text-center md:text-left"
          data-aos="fade-right"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-10">
            How many are going to be minted?
          </h2>
          <p className="mb-8 sm:mx-10 md:ml-0 md:mr-10">
            There will be a total of{" "}
            <span className="text-primary "> 9,999</span> Guardians, However we
            are doing 10 weekly dropsof 999 to total 9,999{" "}
          </p>
          <p className="sm:mx-10 md:ml-0 md:mr-10">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
