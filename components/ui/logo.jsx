import Image from "next/image";
import Link from "next/link";
import SiteLogo from "../../public/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Logo = () => {
  return (
    <div>
      <Link href="/" className="flex items-center">
        <GiHamburgerMenu className="sm:hidden size-7 mr-3" />
        <Image src={SiteLogo} alt="logo" />
      </Link>
    </div>
  );
};
export default Logo;
