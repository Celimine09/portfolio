import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer
      className={`py-20 transition-colors duration-300 ${
        theme === "light"
          ? "bg-gradient-to-b from-white to-gray-50 border-t border-gray-100"
          : "bg-black/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <h3
              className={`text-xl font-light tracking-wider ${
                theme === "light" ? "text-luxury-black" : "text-white/90"
              }`}
            >
              PORTFOLIO<span className="text-luxury-gold">.</span>
            </h3>
            <p
              className={`text-sm font-light leading-relaxed max-w-xs ${
                theme === "light" ? "text-gray-600" : "text-white/70"
              }`}
            >
              Learning. Building. Growing. Made with curiosity and passion by
              Nattanan Tintavee.
            </p>
          </div>

          {/* Navigation Section */}
          <div className="space-y-6">
            <h4 className="text-sm font-light uppercase tracking-wider text-luxury-gold">
              Navigation
            </h4>
            <ul className="space-y-4 grid grid-cols-2 gap-2">
              {["Home", "About", "Portfolio", "Skills", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className={`text-sm transition-colors duration-300 ${
                        theme === "light"
                          ? "text-gray-600 hover:text-luxury-gold"
                          : "text-white/70 hover:text-luxury-gold"
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-6">
            <h4 className="text-sm font-light uppercase tracking-wider text-luxury-gold">
              Connect
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Celimine09"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-300 ${
                  theme === "light"
                    ? "border border-gray-200 text-gray-600 hover:text-luxury-gold hover:border-luxury-gold/50 hover:bg-luxury-gold/5"
                    : "border border-white/10 text-white/70 hover:text-luxury-gold hover:border-luxury-gold/50 hover:bg-luxury-gold/10"
                }`}
                aria-label="Github"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/nattanan-tintavee-7b4973357/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-300 ${
                  theme === "light"
                    ? "border border-gray-200 text-gray-600 hover:text-luxury-gold hover:border-luxury-gold/50 hover:bg-luxury-gold/5"
                    : "border border-white/10 text-white/70 hover:text-luxury-gold hover:border-luxury-gold/50 hover:bg-luxury-gold/10"
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/nattanine_n?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-300 ${
                  theme === "light"
                    ? "border border-gray-200 text-gray-600 hover:text-luxury-gold hover:border-luxury-gold/50 hover:bg-luxury-gold/5"
                    : "border border-white/10 text-white/70 hover:text-luxury-gold hover:border-luxury-gold/50 hover:bg-luxury-gold/10"
                }`}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:celimine.nine@gmail.com"
                className={`p-2 rounded-full transition-all duration-300 ${
                  theme === "light"
                    ? "border border-gray-200 text-gray-600 hover:text-luxury-gold hover:border-luxury-gold/50 hover:bg-luxury-gold/5"
                    : "border border-white/10 text-white/70 hover:text-luxury-gold hover:border-luxury-gold/50 hover:bg-luxury-gold/10"
                }`}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
            <p
              className={`text-xs pt-2 ${
                theme === "light" ? "text-gray-500" : "text-white/50"
              }`}
            >
              Contact: celimine.nine@gmail.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`h-px w-full my-8 ${
            theme === "light"
              ? "bg-gradient-to-r from-transparent via-gray-200 to-transparent"
              : "bg-gradient-to-r from-transparent via-white/10 to-transparent"
          }`}
        ></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p
            className={`text-sm ${
              theme === "light" ? "text-gray-500" : "text-white/50"
            }`}
          >
            © {currentYear} Nattanan Tintavee. All rights reserved.
          </p>
          <p
            className={`text-xs italic mt-2 md:mt-0 ${
              theme === "light" ? "text-gray-400" : "text-white/40"
            }`}
          >
            Designed with precision. Built with passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
