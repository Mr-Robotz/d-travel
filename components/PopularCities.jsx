import Image from "next/image";
import { cities } from "@/data/data";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const PopularCities = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-20 relative">
          <h3 className="uppercase text-blue-700 font-bold">Top Cities</h3>
          <div className="">
            <h1 className="md:w-1/2">Our Popular Cities</h1>
            <p className="description md:w-1/2">
              {"We're a team of humans with the strategy, tools,"} <br /> and
              {"solutions and digital product."}
            </p>
          </div>
          <div className="flex gap-5 text-gray-700 absolute right-0 bottom-5">
            <span className="bg-white p-5 size-18 shadow-md rounded-full cursor-pointer">
              <GoArrowLeft size={25} />
            </span>
            <span className="bg-white p-5 size-18 shadow-md rounded-full cursor-pointer">
              <GoArrowRight size={25} />
            </span>
          </div>
        </div>
        <div className="flex items-center gap-10">
          {cities.map((explore) => (
            <div
              key={explore.id}
              className="w-1/3 relative hover:scale-105 transition duration-300 cursor-pointer shadow-md rounded-2xl"
            >
              <Image
                src={explore.image}
                alt="explore"
                width={364}
                height={495}
                layout="responsive"
              />
              <div className="absolute top-10 left-10 flex flex-col justify-between gap-y-96 text-white">
                <div className="w-full bg-white/30 py-2 px-2 text-center font-medium text-xl rounded-full mb-auto">
                  {explore.name}
                </div>
                <div className="w-full mt-16">
                  <h2 className="text-white">{explore.title}</h2>
                  <p className="text-gray-300">{explore.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PopularCities;
