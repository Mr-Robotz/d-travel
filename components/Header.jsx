import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeaderImage from "@/public/images/header-image.png";
const Header = () => {
  return (
    <header className="relative w-full h-[1110px] bg-black/50 py-10">
      <div className="container h-full">
        <Navbar />
        <Hero />
      </div>
      <Image src={HeaderImage} alt="header-image" className="absolute inset-0 -z-10 w-full h-full object-cover
      " />
    </header>
  );
};
export default Header;
