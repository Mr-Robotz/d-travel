import Image from "next/image";
const Subscribe = () => {
  return (
    <div className="bg-gray-100">
      <div className="container relative -bottom-36">
        <div className="relative flex flex-col md:flex-row items-center gap-20 bg-blue-500  text-white p-20 rounded-2xl">
          <Image
            src="/images/subscribe-bg.png"
            alt="subscribe"
            width={1170}
            height={248}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="w-1/2 text-white">
            <h2 className="text-white text-5xl">Get our pro offers</h2>
            <p>
              Create a visual identity for your company, <br /> and an overall
              brand
            </p>
          </div>
          <div className="w-1/2 bg-white flex justify-between p-2 rounded-md">
            <input
              type="text"
              placeholder="Type your email here"
              className="focus:outline-none py-3 px-10 mr-5 text-gray-600 flex-1"
            />
            <button className="py-5 px-10 ml-5 text-white bg-blue-950 rounded-md hover:bg-blue-800 transition duration-300 cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Subscribe;
