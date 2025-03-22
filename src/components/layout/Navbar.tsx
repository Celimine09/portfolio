import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isLight
            ? "bg-white/90 backdrop-blur-lg border-b border-gray-100 py-4 shadow-sm"
            : "bg-black/90 backdrop-blur-lg border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a
              href="#home"
              className={`text-luxury-black dark:text-white text-xl font-medium tracking-tighter transition-all duration-300 ${
                isScrolled && isLight ? "text-luxury-black" : ""
              }`}
            >
              PORTFOLIO<span className="text-luxury-gold">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center">
            <div className="ml-10 flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 link-underline ${
                    isLight
                      ? isScrolled
                        ? "text-luxury-black hover:text-luxury-gold"
                        : "text-luxury-black hover:text-luxury-gold"
                      : "text-white hover:text-luxury-gold"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="ml-6">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
                isLight
                  ? "text-luxury-black hover:text-luxury-gold"
                  : "text-white hover:text-luxury-gold"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div
            className={`pt-2 pb-3 space-y-1 animate-fade-in ${
              isLight
                ? "bg-white/95 backdrop-blur-lg"
                : "bg-black/95 backdrop-blur-lg"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block px-4 py-2 text-base font-medium ${
                  isLight
                    ? "text-luxury-black hover:bg-gray-50 hover:text-luxury-gold"
                    : "text-white hover:bg-gray-900 hover:text-luxury-gold"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
