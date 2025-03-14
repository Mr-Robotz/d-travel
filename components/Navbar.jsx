import Logo from "@/components/ui/logo";
import NavLinks from "@/components/ui/navLinks";
import ActionButton from "@/components/ui/actionButton";

const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between pb-10 text-gray-300">
      <Logo />
      <NavLinks />
      <ActionButton />
    </nav>
  );
};
export default Navbar;
