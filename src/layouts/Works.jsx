import Button from "../components/Button";

export default function Works() {
  const config = [
    {
      title: "Tolq",
      color: "text-[#A9BC87]",
      desc: "Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.",
      image: "assets/work-1.png",
    },
    {
      title: "Feedback Labs",
      color: "text-[#8BB5C9]",
      desc: "Feedback Labs turns feedback into actionable insights for your team.",
      image: "assets/work-2.png",
    },
    {
      title: "Codekeeper",
      color: "text-[#00A0B6]",
      desc: "Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.",
      image: "assets/work-3.png",
    },
    {
      title: "LegalSite",
      color: "text-[#8B60D3]",
      desc: "Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.",
      image: "assets/work-4.png",
    }
  ];

  return (
    <main className="container flex flex-col">
      <div className="flex flex-col p-4 md:p-24">
        <h1 className="text-3xl md:text-5xl text-center mb-12 md:mb-20">Our works</h1>

        <div className="flex flex-wrap">
          {
            config.map(card => (
              <div key={card.title} className="w-full md:w-1/2 h-full p-2 md:p-4">
                <div className="flex flex-col justify-center items-center p-4 md:px-28 py-8 shadow-2xl rounded-2xl shadow-[rgba(0,0,0,0.1)] text-center">
                  <h1 className={`text-3xl ${card.color}`}>{card.title}</h1>
                  <p className="h-20 my-6">{card.desc}</p>
                  <img alt="banner" src={card.image} className="my-8" />
                  <Button className="w-36">More</Button>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="flex justify-center items-center relative w-full h-96">
        <div className="flex justify-center items-center">
          <img alt="thumb-left" src="assets/thumb-left.png" />
          <h1 className="w-1/2 text-xl md:text-4xl text-center mx-8 text-secondary">Startups create a world that actually is better. Any problem that can be solved, will be solved by a startup, and that is a huge opportunity.</h1>
          <img alt="thumb-right" src="assets/thumb-right.png" />
        </div>
      </div>
    </main>
  );
};
