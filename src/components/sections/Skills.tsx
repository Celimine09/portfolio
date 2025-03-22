import { useRef, useEffect } from "react";
import SkillCard from "../ui/SkillCard";
import { Code, Palette, Globe, Lock, Database, LineChart } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  const isLight = theme === "light";

  const skills = [
    {
      title: "Frontend Development",
      icon: Code,
      level: 3,
      description:
        "Comfortable with React, JavaScript, TypeScript, and Tailwind, continuously improving skills.",
    },
    {
      title: "Backend Development",
      icon: Database,
      level: 2,
      description:
        "Basic knowledge in Node.js, Express, and databases; actively learning.",
    },
    {
      title: "Web Security",
      icon: Lock,
      level: 3,
      description:
        "Familiar with best practices to secure applications and user data.",
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      level: 4,
      description:
        "Creating intuitive interfaces with a focus on user experience and visual aesthetics.",
    },
    {
      title: "Responsive Web Design",
      icon: Globe,
      level: 4,
      description:
        "Building websites that provide optimal viewing across all devices and screen sizes.",
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
      id="skills"
      ref={sectionRef}
      className={`py-24 ${isLight ? "bg-gray-100/80" : "bg-black"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="animate-on-scroll inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-luxury-gold/10 text-luxury-gold rounded-full">
            Expertise
          </span>
          <h2 className="animate-on-scroll mt-4 text-3xl md:text-4xl font-bold text-luxury-black dark:text-white">
            Skills & Capabilities
          </h2>
          <p className="animate-on-scroll mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            A comprehensive set of technical and creative skills that enable me
            to deliver exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              icon={skill.icon}
              level={skill.level}
              description={skill.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
