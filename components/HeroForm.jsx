import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";

const HeroForm = () => {
  return (
    <div>
      <form className="mt-10 flex items-center h-16 gap-5 ">
        <div className="grid grid-cols-1 md:grid-cols-3 text-gray-700 bg-white h-full pl-5 rounded">
            <div className="flex items-center gap-2 bg-white">
                <FaSearch className=""/>
                <input type="text" placeholder="Search destination" className="focus:outline-none pl-8" />
            </div>
            <div className="flex items-center gap-2 before:content-[''] before:h-8 before:bg-gray-300 before:w-[2px] before:mr-2">
                <SlLocationPin className=""/>
                <input type="text" placeholder="C. location" className="focus:outline-none pl-8" />
            </div>
            <div className="flex items-center before:content-[''] before:h-8 before:bg-gray-300 before:w-[2px]">
                <input type="text" placeholder="2 Persons" className="focus:outline-none pl-8" />
            </div>
        </div>
        <button className="bg-blue-500 h-full text-white md:text-xl px-4 text-sm md:text-md  md:px-16 rounded hover:border-2 hover:bg-transparent hover:border-white transition duration-300">
          Search
        </button>
      </form>
    </div>
  );
};
export default HeroForm;
