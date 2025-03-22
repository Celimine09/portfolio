import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    // Show button when page is scrolled down
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`fixed bottom-8 right-8 z-50 p-2 rounded-full shadow-lg transform transition-all duration-500 ${
            isHovered ? "scale-110 shadow-xl" : ""
          } ${
            isLight
              ? "bg-gradient-to-r from-white via-gray-50 to-white"
              : "bg-black"
          }`}
          aria-label="Back to top"
          style={{
            boxShadow: isHovered
              ? `0 10px 25px -5px rgba(212, 175, 55, 0.3)`
              : `0 4px 12px rgba(0, 0, 0, 0.1)`,
          }}
        >
          <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden">
            {/* Gold background effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-tr from-luxury-gold/20 via-luxury-gold/10 to-transparent rounded-full transition-opacity duration-500 ${
                isHovered ? "opacity-60" : "opacity-20"
              }`}
            ></div>

            {/* Gold border */}
            <div className="absolute inset-0 rounded-full border border-luxury-gold/50"></div>

            {/* Inner gold circle */}
            <div
              className={`absolute rounded-full transition-all duration-500 ${
                isHovered
                  ? "inset-2 bg-luxury-gold/20"
                  : "inset-3 bg-luxury-gold/10"
              }`}
            ></div>

            {/* Animated gold ring */}
            <div
              className={`absolute inset-0 border-2 rounded-full transition-all duration-500 ${
                isHovered
                  ? "border-luxury-gold animate-pulse"
                  : "border-luxury-gold/30"
              }`}
            ></div>

            {/* Arrow icon */}
            <ArrowUp
              size={18}
              className={`relative z-10 transition-all duration-300 ${
                isHovered
                  ? "text-luxury-gold transform -translate-y-0.5"
                  : "text-luxury-gold/80"
              }`}
            />
          </div>

          {/* Text tooltip - appears on hover */}
          <div
            className={`absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded-md text-xs font-medium transition-all duration-300 ${
              isLight
                ? "bg-white text-luxury-black border border-luxury-gold/20"
                : "bg-gray-900 text-white border border-luxury-gold/20"
            } ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            Back to top
          </div>
        </button>
      )}
    </>
  );
};

export default BackToTop;
