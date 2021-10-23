import RoadmapImage from "../../assets/images/roadmapimage.png";

const data = [
  {
    title: "Secondary Sales/Passive Income",
    txt: "if you are the holder of a guardian you will recieve 85% of the royalties from secondary sales paid out on a monthly basis, the more guardians you hold the more you get.",
  },
  {
    title: "Guardian do Good",
    txt: "Following every phase drop we will donate a portion of sales to a community voted charity. Fully Minted this will be the equivalent of ($10,000USD) per drop phase.",
  },
  {
    title: "Community Engagement and Merchandise",
    txt: "We love our community and holders of guardians will be given unique opportunities to feature their guardians on products we release in the future this may include things such as: 3D Figiures, Clothing Products, Posters/arts and marketing products. (if you are the member holder of one of these featured guardians you will recieve a % of the revenue made).",
  },
  {
    title: "Exclusive Access and The Future",
    txt: "Guardians will partner with other projects in the solana universe to gain exclusive rights to presale and a % of sale redristibuted to holders of a Guardian NFT.",
    text2:
      "Every Guardian needs a companion, Following launch we will be bringing you guys more details on Battle Pets and companions",
  },
];

const Index = () => {
  return (
    <section className="roadmap py-24">
      <div className="container">
        <div>
          <h2
            className="text-primary text-center text-3xl md:text-4xl font-semibold mb-20"
            data-aos="fade-down"
          >
            Roadmap
          </h2>
        </div>
        <div>
          <div className="hidden md:block" data-aos="fade-down">
            <img src={RoadmapImage} alt="" />
          </div>
          <div>
            <div className="md:hidden">
              {data.map((v, i) => (
                <div
                  className="bg-secondary text-center p-4 py-6 pb-8 my-8"
                  key={i}
                  data-aos="fade-down"
                >
                  <span className="w-8 h-8 font-bold bg-primary rounded-full flex items-center justify-center mx-auto">
                    {i + 1}
                  </span>
                  <h4 className="text-primary my-5 font-semibold text-xl">
                    {v.title}
                  </h4>
                  <p className="text-sm">{v.txt}</p>
                  {v.text2 ? <p className="text-sm mt-4">{v.text2}</p> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
