import Image from "next/image";
import { testimonials } from "@/data/data";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Testimonials = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-28 relative">
          <h3 className="uppercase text-blue-700 font-bold">Testimonials</h3>
          <div className="">
            <h1 className="md:w-1/2">What Our Clients Say</h1>
            <p className="description md:w-1/2">
              Create a visual identity for your company, <br /> and an overall
              brand
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
q.,l
        <div className="flex flex-col items-center md:flex-row gap-10">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="w-full bg-white shadow-md rounded-2xl"
            >
              <Image src={test.person} alt="test" width={86} height={86}  className="relative -top-10 left-1/2 -translate-x-1/2"/>
              <div className="px-10 pb-5">
                <div className="text-center border-b-2 border-gray-300/60 pb-6">
                  <h3 className="text-2xl font-bold text-blue-950">{test.name}</h3>
                  <p className="text-gray-500 font-semibold text-sm">{test.skill}</p>
                </div>
                <div className="pt-10">
                  <Image src={test.rate} alt="rating" width={93} height={16} className="pb-5"/>
                  <p className="text-gray-500 font-medium">{test.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
