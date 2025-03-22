import { useEffect, useRef, ReactNode } from "react";

interface AnimatedContentProps {
  content: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
}

const AnimatedContent = ({
  content,
  className = "",
  threshold = 0.1,
  delay = 0,
}: AnimatedContentProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("in-view");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const currentRef = contentRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  return (
    <div
      ref={contentRef}
      className={`animate-on-scroll ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {content}
    </div>
  );
};

export default AnimatedContent;
