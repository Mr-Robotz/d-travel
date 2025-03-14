import Image from "next/image";
import { explore } from "@/data/data";

const Explore = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-20">
          <h3 className="uppercase text-blue-700 font-bold">About Us</h3>
          <div className="flex items-center">
            <h1 className="md:w-1/2">
              Explore all corners of the world with us.
            </h1>
            <p className="description md:w-1/2">
              These exercises ran in parallel with a series of focus groups
              comprising of parents. These exercises ran in parallel with a
              series of focus groups comprising of parents.
            </p>
          </div>
        </div>
        <div className="flex gap-10">
          {explore.map((explore) => (
            <div key={explore.id} className="md:w-1/2 bg-white shadow-md rounded-lg hover:scale-105 transition duration-300 cursor-pointer">
              <div>
                <Image
                  src={explore.image}
                  alt="explore"
                  width={540}
                  height={290}
                />
                <div className="w-16 h-16 bg-white text-3xl rounded-full flex items-center justify-center relative -top-10 left-10 shadow-lg">{explore.icon}</div>
              </div>
              <div className="p-10">
                <h2>{explore.title}</h2>
                <p>{explore.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Explore;
