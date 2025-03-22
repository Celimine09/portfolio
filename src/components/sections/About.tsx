import { useEffect, useRef } from "react";
import AnimatedContent from "../ui/AnimatedContent";
import { useTheme } from "../../context/ThemeContext";

const About = () => {
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
              }, 200 * index);
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
      id="about"
      ref={sectionRef}
      className={`py-24 relative ${isLight ? "bg-gray-100" : "bg-background"}`}
    >
      {isLight && (
        <>
          {/* Decorative elements for light theme */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-luxury-gold/10 via-luxury-gold/30 to-transparent"></div>

          <div className="absolute bottom-0 right-10 w-32 h-32">
            <div className="absolute inset-0 rotate-45 border border-luxury-gold/20 transition-transform duration-700 hover:rotate-90"></div>
          </div>

          <div className="absolute top-20 left-10 w-24 h-24">
            <div className="absolute inset-0 rotate-12 border border-luxury-gold/20 transition-transform duration-700 hover:rotate-45"></div>
          </div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-full w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] xl:w-[450px] aspect-square mx-auto border-4 border-luxury-gold/30">
                <img
                  src="/img/me1.jpg"
                  alt="Me"
                  className="w-full h-full object-cover object-center"
                />
                {isLight && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-luxury-gold/10 to-transparent opacity-30"></div>
                )}
              </div>
              <div
                className={`absolute -bottom-8 -right-8 w-40 h-40 rounded-lg -z-10 ${
                  isLight ? "bg-luxury-gold/5" : "bg-luxury-gold/10"
                }`}
              ></div>

              {isLight && (
                <div className="absolute -top-6 -left-6 w-24 h-24 border border-luxury-gold/20 rounded-lg -z-10"></div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <AnimatedContent
              content={
                <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-luxury-gold/10 text-luxury-gold rounded-full">
                  About Me
                </span>
              }
              className="mb-2"
            />

            <AnimatedContent
              content={
                <h2 className="text-3xl md:text-4xl font-bold text-luxury-black dark:text-white">
                  Nattanan Tintavee
                </h2>
              }
              delay={200}
            />

            <AnimatedContent
              content={
                <div className={`${isLight ? "luxury-accent-border" : ""}`}>
                  <p className="text-gray-600 dark:text-gray-300">
                    Hello! My name is Nattanan Tintavee, but please call me
                    Nine. I'm currently pursuing my third year in Computer
                    Science at King Mongkut's Institute of Technology Ladkrabang
                    (KMITL). I have a deep interest in web development—covering
                    full-stack, frontend, and backend areas.
                  </p>
                </div>
              }
              delay={400}
            />

            <AnimatedContent
              content={
                <p className="text-gray-600 dark:text-gray-300">
                  While I might not have extensive experience just yet, I'm
                  genuinely passionate, committed, and eager to continuously
                  develop my skills. I'm always ready to learn, embrace new
                  challenges, and grow professionally through meaningful
                  experiences.
                </p>
              }
              delay={600}
            />

            {/* <AnimatedContent
              content={
                <div
                  className={`pt-4 space-x-6 ${
                    isLight
                      ? "p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                      : ""
                  }`}
                >
                  <span className="inline-flex items-center text-sm font-medium text-luxury-black dark:text-white">
                    <span className="mr-2 font-bold text-xl text-luxury-gold">
                      6+
                    </span>{" "}
                    Years Experience
                  </span>
                  <span className="inline-flex items-center text-sm font-medium text-luxury-black dark:text-white">
                    <span className="mr-2 font-bold text-xl text-luxury-gold">
                      50+
                    </span>{" "}
                    Projects Completed
                  </span>
                </div>
              }
              delay={800}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
