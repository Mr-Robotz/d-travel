
import {navLinks} from "@/data/data"
import Link from "next/link"
const NavLinks = () => {
  return (
    <nav className="hidden gap-8 md:flex">
      {navLinks.map((link) => (
        <Link key={link.id} href={link.link} className="tracking-wide hover:text-gray-400 transition duration-300">
          {link.name}
        </Link>
      ))}
    </nav>
  )
}
export default NavLinks