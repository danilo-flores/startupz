import Button from "../components/Button";

export default function Hiring() {
  return (
    <main className="flex justify-center relative w-full h-[512px] bg-background">
      <img alt="hiring-1" src="assets/hiring-1.png" className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2" />
      <img alt="hiring-2" src="assets/hiring-2.png" className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2" />

      <div className="container flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl text-center">We are hiring!</h1>
          <p className="w-full md:w-[460px] text-xl md:text-2xl text-secondary text-center my-8 p-2">We're always looking for talented people to join and help build our startups. Check out our current openings</p>

          <Button secondary>See current openings</Button>
        </div>
      </div>
    </main>
  );
};
