import { useRef, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  ArrowUpRight,
  University,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements =
              entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("in-view");
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`py-24 relative ${
        isLight ? "luxury-light-bg" : "bg-gray-900"
      }`}
    >
      {isLight && (
        <>
          {/* Decorative elements for light theme */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent"></div>
          <div className="absolute top-20 right-20 w-32 h-32 rounded-full border border-luxury-gold/10 opacity-50"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full border border-luxury-gold/10 opacity-50"></div>
          <div className="absolute inset-0 opacity-5 luxury-dots"></div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="animate-on-scroll inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-luxury-gold/10 text-luxury-gold rounded-full">
            Get in Touch
          </span>
          <h2 className="animate-on-scroll mt-4 text-3xl md:text-4xl font-bold text-luxury-black dark:text-white">
            Let's Connect
          </h2>
          <p className="animate-on-scroll mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Have a project in mind or want to explore possibilities? Feel free
            to reach out through any of these channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="animate-on-scroll space-y-8">
            <div
              className={`flex items-start space-x-6 p-6 rounded-lg transition-all duration-300 ${
                isLight ? "bg-white hover:shadow-md" : "bg-gray-800/50"
              }`}
            >
              <div
                className={`flex-shrink-0 p-3 rounded-full text-luxury-gold ${
                  isLight ? "bg-luxury-gold/10" : "bg-luxury-gold/20"
                }`}
              >
                <University size={28} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-luxury-black dark:text-white mb-2">
                  University
                </h3>
                <a
                  className={`text-base ${
                    isLight
                      ? "text-gray-600 hover:text-luxury-gold"
                      : "text-gray-300 hover:text-luxury-gold"
                  } transition-colors`}
                >
                  Computer Science
                </a>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  King Mongkut's Institute of Technology Ladkrabang
                </p>
              </div>
            </div>

            <div
              className={`flex items-start space-x-6 p-6 rounded-lg transition-all duration-300 ${
                isLight ? "bg-white hover:shadow-md" : "bg-gray-800/50"
              }`}
            >
              <div
                className={`flex-shrink-0 p-3 rounded-full text-luxury-gold ${
                  isLight ? "bg-luxury-gold/10" : "bg-luxury-gold/20"
                }`}
              >
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-luxury-black dark:text-white mb-2">
                  Location
                </h3>
                <p
                  className={`text-base ${
                    isLight ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  Ladkrabang, Thailand
                </p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Based in Bangkok, available for remote work worldwide.
                </p>
              </div>
            </div>

            <div
              className={`flex items-start space-x-6 p-6 rounded-lg transition-all duration-300 ${
                isLight ? "bg-white hover:shadow-md" : "bg-gray-800/50"
              }`}
            >
              <div
                className={`flex-shrink-0 p-3 rounded-full text-luxury-gold ${
                  isLight ? "bg-luxury-gold/10" : "bg-luxury-gold/20"
                }`}
              >
                <Phone size={28} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-luxury-black dark:text-white mb-2">
                  Connect
                </h3>
                <p
                  className={`text-base ${
                    isLight ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  080-145-1725
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      isLight
                        ? "text-luxury-black hover:text-luxury-gold"
                        : "text-white hover:text-luxury-gold"
                    } transition-colors`}
                  ></a>
                </p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Contact me directly.
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="animate-on-scroll">
            <div
              className={`p-8 rounded-lg ${
                isLight
                  ? "bg-white shadow-lg border border-gray-100"
                  : "bg-gray-950 shadow-lg border border-white/10"
              }`}
            >
              <h3 className="text-xl font-bold text-luxury-black dark:text-white mb-6">
                Connect with Me
              </h3>

              <div className="space-y-6">
                <a
                  href="https://github.com/Celimine09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-4 rounded-lg transition-all duration-300 ${
                    isLight
                      ? "bg-gray-50 hover:bg-luxury-gold/10 hover:text-luxury-gold"
                      : "bg-gray-900 hover:bg-luxury-gold/10 hover:text-luxury-gold"
                  }`}
                >
                  <Github className="mr-4" size={24} />
                  <div>
                    <p
                      className={`font-medium ${
                        isLight ? "text-luxury-black" : "text-white"
                      }`}
                    >
                      GitHub
                    </p>
                    <p className="text-sm text-gray-500">
                      Check out my code repositories
                    </p>
                  </div>
                  <div className="ml-auto text-luxury-gold">
                    <ArrowUpRight size={20} />
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/nattanan-tintavee-7b4973357/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-4 rounded-lg transition-all duration-300 ${
                    isLight
                      ? "bg-gray-50 hover:bg-luxury-gold/10 hover:text-luxury-gold"
                      : "bg-gray-900 hover:bg-luxury-gold/10 hover:text-luxury-gold"
                  }`}
                >
                  <Linkedin className="mr-4" size={24} />
                  <div>
                    <p
                      className={`font-medium ${
                        isLight ? "text-luxury-black" : "text-white"
                      }`}
                    >
                      LinkedIn
                    </p>
                    <p className="text-sm text-gray-500">
                      Connect with me professionally
                    </p>
                  </div>
                  <div className="ml-auto text-luxury-gold">
                    <ArrowUpRight size={20} />
                  </div>
                </a>

                <a
                  href="https://instagram.com/nattanine_n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-4 rounded-lg transition-all duration-300 ${
                    isLight
                      ? "bg-gray-50 hover:bg-luxury-gold/10 hover:text-luxury-gold"
                      : "bg-gray-900 hover:bg-luxury-gold/10 hover:text-luxury-gold"
                  }`}
                >
                  <Instagram className="mr-4" size={24} />
                  <div>
                    <p
                      className={`font-medium ${
                        isLight ? "text-luxury-black" : "text-white"
                      }`}
                    >
                      Instagram
                    </p>
                    <p className="text-sm text-gray-500">Follow my journey</p>
                  </div>
                  <div className="ml-auto text-luxury-gold">
                    <ArrowUpRight size={20} />
                  </div>
                </a>

                <a
                  href="mailto:celimine.nine@gmail.com"
                  className={`flex items-center p-4 rounded-lg transition-all duration-300 ${
                    isLight
                      ? "bg-gray-50 hover:bg-luxury-gold/10 hover:text-luxury-gold"
                      : "bg-gray-900 hover:bg-luxury-gold/10 hover:text-luxury-gold"
                  }`}
                >
                  <Mail className="mr-4" size={24} />
                  <div>
                    <p
                      className={`font-medium ${
                        isLight ? "text-luxury-black" : "text-white"
                      }`}
                    >
                      Email
                    </p>
                    <p className="text-sm text-gray-500">
                      celimine.nine@gmail.com
                    </p>
                  </div>
                  <div className="ml-auto text-luxury-gold">
                    <ArrowUpRight size={20} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
