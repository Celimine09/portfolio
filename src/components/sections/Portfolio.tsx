import { useRef, useEffect } from "react";
import ProjectCard from "../ui/ProjectCard";
import { useTheme } from "../../context/ThemeContext";

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  const isLight = theme === "light";

  const projects = [
    {
      title: "Jaangkhon Shopping Website (On Development)",
      description:
        "A premium shopping experience with attention to detail and seamless interactions.That are currently developing.Have mockup on jaangkhon.store",
      imageSrc: "/img/web-image1.png",
      tags: [
        "UI/UX",
        "React",
        "E-commerce",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL",
        "Typescript",
        "Security",
      ],
      link: "https://github.com/Celimine09/jaangkhon-frontend.git",
    },
    {
      title: "Weather forecast app",
      description:
        "A clean and intuitive application offering precise current weather updates and forecasts, keeping you informed and prepared.",
      imageSrc: "/img/example_weathering1.png",
      tags: [
        "Web Design",
        "UI/UX",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Typescript",
        "API Integration",
      ],
      link: "https://github.com/Celimine09/weather-app.git",
    },
    {
      title: "Simple To-Do List",
      description:
        "A minimalist and elegant task management app designed to help you organize daily tasks with clarity and ease.",
      imageSrc: "/img/example1.png",
      tags: [
        "UI/UX",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Typescript",
        "CRUD Operations",
      ],
      link: "https://github.com/Celimine09/simple-todolist-front.git",
    },
    {
      title: "Hospital Management Website",
      description:
        "My initial step into web development: designed user authentication, navigation bar, and database structure to provide convenient and clear hospital service information.",
      imageSrc: "/img/hospital.png",
      tags: ["React", "CSS", "MySQL", "Typescript", "Javascript"],
      link: "https://github.com/Celimine09/hospital-web.git",
    },
  ];

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
      id="portfolio"
      ref={sectionRef}
      className={`py-24 ${
        isLight ? "bg-white diagonal-stripes" : "bg-gray-900"
      }`}
    >
      {isLight && (
        <>
          {/* Decorative elements for light theme */}
          <div
            className="absolute left-0 top-1/3 h-64 w-4 bg-luxury-gold/10"
            style={{ clipPath: "polygon(0 0, 100% 20%, 100% 80%, 0 100%)" }}
          ></div>
          <div
            className="absolute right-0 bottom-1/3 h-64 w-4 bg-luxury-gold/10"
            style={{ clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 80%)" }}
          ></div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="animate-on-scroll inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-luxury-gold/10 text-luxury-gold rounded-full">
            My Work
          </span>
          <h2 className="animate-on-scroll mt-4 text-3xl md:text-4xl font-bold text-luxury-black dark:text-white">
            Featured Projects
          </h2>
          <p className="animate-on-scroll mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            A selection of my recent work, showcasing attention to detail and a
            focus on premium user experiences.
          </p>
        </div>

        {isLight && (
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-transparent via-luxury-gold/30 to-transparent"></div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              tags={project.tags}
              link={project.link}
              delay={index * 100}
              theme={theme}
            />
          ))}
        </div>

        <div className="animate-on-scroll text-center mt-16">
          <a
            href="#contact"
            className={`luxury-button ${
              isLight ? "gold-border-gradient" : ""
            } inline-flex items-center`}
          >
            CONTACT ME
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
