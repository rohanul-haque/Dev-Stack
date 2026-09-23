import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "Technologies", "Projects", "About", "Contact"];

  return (
    <header className="border-base-200 bg-base-100/95 sticky top-0 z-50 border-b border-b-gray-300 backdrop-blur">
      <nav className="container mx-auto flex h-20 items-center justify-between px-5 lg:px-20">
        {/* Left Section */}

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="btn btn-ghost btn-circle lg:hidden"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <a href="/" className="shrink-0">
          <img src={logo} alt="Logo" className="h-9 w-auto object-contain" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 lg:flex">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-base-content/70 hover:text-secondary text-sm font-medium transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          <button className="btn btn-ghost btn-xs sm:btn-sm">Sign Up</button>

          <button className="btn btn-secondary btn-xs sm:btn-sm rounded-full px-4 sm:px-6">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="bg-base-100 absolute top-20 left-0 w-full border-t border-b border-gray-300 px-5 py-5 lg:hidden">
            <ul className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base-content/70 hover:bg-base-200 hover:text-secondary block rounded-lg px-4 py-3 text-sm font-medium transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Actions */}
            <div className="border-base-200 mt-4 flex flex-col gap-2 border-t pt-4">
              <button className="hover:bg-base-200 w-full rounded-full px-4 py-2.5 text-sm font-medium">
                Sign In
              </button>

              <button className="btn btn-secondary w-full rounded-full">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
