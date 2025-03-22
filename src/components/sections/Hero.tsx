import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        isLight ? "luxury-dots" : "bg-background"
      }`}
    >
      {/* Decorative elements - Only in light mode */}
      {isLight && (
        <>
          {/* Gold corner accent top right */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] overflow-hidden">
            <div className="absolute -top-[150px] -right-[150px] w-[300px] h-[300px] rounded-full border border-luxury-gold/10"></div>
            <div className="absolute -top-[100px] -right-[100px] w-[200px] h-[200px] rounded-full border border-luxury-gold/20"></div>
            <div className="absolute -top-[50px] -right-[50px] w-[100px] h-[100px] rounded-full border border-luxury-gold/30"></div>
          </div>

          {/* Gold corner accent bottom left */}
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] overflow-hidden">
            <div className="absolute -bottom-[150px] -left-[150px] w-[300px] h-[300px] rounded-full border border-luxury-gold/10"></div>
            <div className="absolute -bottom-[100px] -left-[100px] w-[200px] h-[200px] rounded-full border border-luxury-gold/20"></div>
            <div className="absolute -bottom-[50px] -left-[50px] w-[100px] h-[100px] rounded-full border border-luxury-gold/30"></div>
          </div>

          {/* Floating gold decorative elements */}
          <div className="absolute top-1/4 left-1/5 w-16 h-16 opacity-20">
            <div
              className="w-full h-full rotate-45 border border-luxury-gold animate-float"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>
          <div className="absolute bottom-1/4 right-1/5 w-12 h-12 opacity-20">
            <div
              className="w-full h-full rotate-12 border border-luxury-gold animate-float"
              style={{ animationDelay: "1.2s" }}
            ></div>
          </div>
          <div className="absolute top-1/3 right-1/4 w-8 h-8 opacity-10">
            <div
              className="w-full h-full rotate-[30deg] border border-luxury-gold animate-float"
              style={{ animationDelay: "0.8s" }}
            ></div>
          </div>
        </>
      )}

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10"></div>

      {isLight ? (
        <div className="absolute w-full h-full flex items-center justify-center">
          <div className="relative w-[700px] h-[700px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gray-100/80 via-white to-gray-50/80 blur-3xl"></div>
            <div className="absolute inset-[100px] rounded-full border border-luxury-gold/5"></div>
            <div className="absolute inset-[200px] rounded-full border border-luxury-gold/10"></div>
            <div className="absolute inset-[300px] rounded-full border border-luxury-gold/20"></div>
          </div>
        </div>
      ) : (
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gray-900 opacity-50 blur-3xl"></div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase bg-luxury-gold/10 text-luxury-gold rounded-full">
              Portfolio
            </span>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-luxury-black dark:text-white">
              Nattanan
              <br />
              Tintavee
            </h1>
          </div>

          <p
            className={`mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 transition-all duration-1000 delay-500 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            "Passionate web developer eager to learn, create, and innovate.
            <br />
            Scroll down to see my work and journey!"
          </p>

          <div
            className={`mt-10 transition-all duration-1000 delay-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href="#about"
              className={`luxury-button ${
                isLight ? "gold-border-gradient" : ""
              } inline-flex items-center gap-2`}
            >
              Discover My Work
              <ChevronDown size={16} className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <a
          href="#about"
          className={`text-luxury-black dark:text-white opacity-50 hover:opacity-100 animate-bounce transition-all duration-1000 delay-1000 ease-out ${
            isVisible ? "opacity-50 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <ChevronDown size={24} />
        </a>
      </div>

      {/* Background accents */}
      {isLight ? (
        <>
          <div className="absolute right-0 top-1/3 w-64 h-64 bg-luxury-gold/5 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute left-1/4 bottom-1/4 w-40 h-40 bg-luxury-gold/10 rounded-full blur-3xl opacity-30"></div>
        </>
      ) : (
        <>
          <div className="absolute right-0 top-1/3 w-64 h-64 bg-luxury-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute left-1/4 bottom-1/4 w-40 h-40 bg-luxury-gold/10 rounded-full blur-3xl"></div>
        </>
      )}
    </section>
  );
};

export default Hero;
