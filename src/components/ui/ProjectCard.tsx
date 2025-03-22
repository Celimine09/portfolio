import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  link?: string;
  delay?: number;
  theme?: string;
}

const ProjectCard = ({
  title,
  description,
  imageSrc,
  tags,
  link = "#",
  delay = 0,
  theme = "light",
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isLight = theme === "light";

  return (
    <div
      className="animate-on-scroll group relative h-full"
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative element for light theme */}
      {isLight && isHovered && (
        <div
          className="absolute -inset-2 bg-luxury-gold/5 rounded-lg blur-sm -z-10 transition-opacity duration-300"
          aria-hidden="true"
        ></div>
      )}

      <div
        className={`overflow-hidden rounded-lg transition-all duration-300 h-full flex flex-col ${
          isLight
            ? "bg-white/90 shadow-sm hover:shadow-xl gold-border-gradient"
            : "bg-gray-800 border border-white/10 hover:shadow-xl"
        }`}
      >
        <div className="overflow-hidden aspect-video w-full relative">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover hover-zoom transition-transform duration-700"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />
          {isLight && (
            <div
              className={`absolute inset-0 bg-gradient-to-tr from-luxury-gold/10 to-transparent opacity-0 transition-opacity duration-500 ${
                isHovered ? "opacity-20" : ""
              }`}
            ></div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h3
                className={`text-xl font-medium ${
                  isLight ? "text-luxury-black" : "text-white"
                } ${
                  isHovered ? "text-luxury-gold" : ""
                } transition-colors duration-300`}
              >
                {title}
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`inline-block px-2 py-1 text-xs font-medium rounded transition-colors duration-300 ${
                      isLight
                        ? isHovered
                          ? "bg-luxury-gold/10 text-luxury-gold"
                          : "bg-gray-100 text-gray-700"
                        : "bg-gray-700 text-gray-300"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div
              className={`${
                isHovered ? "opacity-100" : "opacity-0"
              } transition-opacity duration-300 ${
                isLight ? "text-luxury-gold" : "text-luxury-gold"
              }`}
            >
              <ArrowUpRight size={20} />
            </div>
          </div>
          <p
            className={`mt-3 text-sm ${
              isLight ? "text-gray-600" : "text-gray-300"
            }`}
          >
            {description}
          </p>

          {/* GitHub Button */}
          <div className="mt-auto pt-4">
            {/* Animated underline in light theme */}
            {isLight && (
              <div
                className={`h-px w-full bg-gradient-to-r from-gray-200 via-luxury-gold/30 to-gray-200 transition-opacity duration-300 mb-4 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            )}

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isLight
                  ? "bg-luxury-black text-white hover:bg-luxury-black/90 gold-border-gradient"
                  : "bg-luxury-gold text-black hover:bg-luxury-gold/90"
              } ${isHovered ? "translate-y-0" : "translate-y-1 opacity-80"}`}
            >
              <Github size={16} />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
