import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-black">
      <div className="container">
        <footer className="text-white flex justify-between items-center gap-10  pb-20 pt-52">
          <div className="w-full">
            <Image src="/images/logo.png" alt="logo" width={115} height={26} className="mb-10" />
            <p className="text-white/60 text-lg leading-loose">
              These are many variations of <br />
              passages of available
            </p>
          </div>
          <div className="w-full flex flex-wrap ">
            <div className="flex items-center w-1/2 text-xl space-x-5 mb-10">
              <FaFacebookF className="bg-white rounded-full p-5 text-black"/>
              <span>Facebook</span>
            </div>
            <div className="flex items-center w-1/2 text-xl space-x-5 mb-10">
              <FaTwitter  className="bg-white rounded-full p-5 text-blue"/>
              <span>Linkedin</span>
            </div>
            <div className="flex items-center w-1/2 text-xl space-x-5">
              <FaLinkedinIn color="red" className="bg-white rounded-full p-5 text-blue"/>
              <span>Twitter</span>
            </div>
            <div className="flex items-center w-1/2 text-xl space-x-5">
              <FaPinterestP className="bg-white rounded-full p-5 text-blue" />
              <span>Pinterest</span>
            </div>
          </div>
          <div className="w-full text-right">
            <h3 className="text-2xl mb-10">Recent Post</h3>
            <p className="text-white/60 text-lg leading-loose">
              Top 5-Himalayan Treks <br /> May 06, 2024{" "}
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};
export default Footer;
