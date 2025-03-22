import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  level: number;
  description: string;
  delay?: number;
}

const SkillCard = ({
  title,
  icon: Icon,
  level,
  description,
  delay = 0,
}: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Create an array of 5 elements to represent skill level dots
  const dots = Array.from({ length: 5 }, (_, i) => i < level);

  return (
    <div
      className="animate-on-scroll relative p-6 bg-white/80 dark:bg-gray-800/50 border border-black/5 dark:border-white/10 rounded-lg transition-all duration-500 hover:shadow-xl group backdrop-blur-sm"
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient effect on hover */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-500"
        aria-hidden="true"
      ></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center space-x-3">
            <div
              className={`p-3 rounded-md ${
                isHovered
                  ? "bg-luxury-gold/20 text-luxury-gold"
                  : "bg-gray-50 dark:bg-gray-700 text-luxury-black dark:text-white"
              } transition-all duration-500`}
            >
              <Icon size={20} className={isHovered ? "animate-pulse" : ""} />
            </div>
            <h3
              className={`font-medium text-luxury-black dark:text-white transition-all duration-300 ${
                isHovered ? "text-luxury-gold dark:text-luxury-gold" : ""
              }`}
            >
              {title}
            </h3>
          </div>
          <div className="flex space-x-1">
            {dots.map((filled, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  filled
                    ? isHovered
                      ? "bg-luxury-gold scale-110"
                      : "bg-luxury-gold"
                    : "bg-gray-200 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        <p
          className={`text-sm ${
            isHovered
              ? "text-gray-800 dark:text-gray-200"
              : "text-gray-600 dark:text-gray-300"
          } transition-all duration-300`}
        >
          {description}
        </p>

        {/* Subtle border animation on hover */}
        <div
          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-luxury-gold/50 to-luxury-gold w-0 group-hover:w-full transition-all duration-700 ease-in-out rounded-b-lg`}
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;
