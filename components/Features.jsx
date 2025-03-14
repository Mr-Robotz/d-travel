import Image from "next/image";
import { features } from "@/data/data";
import { LuClock3 } from "react-icons/lu";

const Features = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center mb-20">
          <h1>Featured Tour Places</h1>
          <p className="description">
            There are many variations of passages of Lorem Ipsum available,{" "}
            <br /> but the majority have suffered alteration.
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="w-full bg-white shadow-md rounded-2xl p-4 hover:scale-105 transition duration-300 cursor-pointer"
            >
              <Image
                src={feature.image}
                alt="feature image"
                width={250}
                height={263}
                layout="responsive"
                className="w-full"
              />
              <div className="pt-3 pb-1">
                <h2>{feature.title}</h2>
                <div className="flex items-center justify-between text-gray-500">
                  <span className="font-bold flex items-center">
                    <LuClock3 className="inline-block mr-1 size-5" />
                    {feature.days}
                  </span>
                  <span className="text-red-400 font-bold">
                    {feature.ammount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;
