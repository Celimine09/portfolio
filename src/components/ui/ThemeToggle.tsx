import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
        isLight
          ? "bg-gray-100 hover:bg-gray-200 text-gray-700"
          : "bg-gray-800 hover:bg-gray-700 text-white"
      }`}
      aria-label="Toggle theme"
    >
      {isLight ? (
        <>
          <Moon
            className={`h-4 w-4 ${
              isHovered ? "text-luxury-gold" : ""
            } transition-colors duration-300`}
          />
          <span className="text-xs font-medium">Dark Mode</span>
        </>
      ) : (
        <>
          <Sun
            className={`h-4 w-4 ${
              isHovered ? "text-luxury-gold" : ""
            } transition-colors duration-300`}
          />
          <span className="text-xs font-medium">Light Mode</span>
        </>
      )}
    </button>
  );
}
