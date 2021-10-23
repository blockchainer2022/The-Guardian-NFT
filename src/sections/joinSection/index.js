const Index = () => {
  return (
    <section className="bg-primary py-20 md:py-32">
      <div className="container md:flex items-center ">
        <div className="md:w-8/12 md:pr-10">
          <h4
            className="text-black font-semibold text-2xl md:text-4xl"
            data-aos="fade-right"
          >
            Join our community
          </h4>
          <p
            className="font-semibold py-4 text-sm md:text-base"
            data-aos="fade-right"
          >
            Guardian Discord already has over 150,000 members! If you want to
            join the #GUARDIANGANG it’s here. Join us to get the news as soon as
            possible and follow our latest announcements.
          </p>
        </div>
        <div className="md:w-4/12">
          <button
            className="bg-white rounded-full py-4 md:py-5 px-6 font-bold text-primary md:w-full "
            data-aos="fade-left"
          >
            Join Our Discord
          </button>
        </div>
      </div>
    </section>
  );
};

export default Index;
