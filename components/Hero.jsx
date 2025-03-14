import HeroForm from "./HeroForm";

const Hero = () => {
  return (
    <div className="container flex flex-col items-center  h-full text-center text-white">
      <h1 className=" lg:text-8xl font-bold mt-60 text-white">
        Explore The World <br /> In Comfort.
      </h1>
      <p className="w-3/5 text-xl mt-10">
        You do not have the right to remain silence... lets us know <br /> what it
        takes to challenge you
      </p>
      <HeroForm />
    </div>
  );
};
export default Hero;
