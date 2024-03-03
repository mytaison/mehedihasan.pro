"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  animationDelay = false,
  delay = 0.2,
  tracking = "wide",
}: {
  words: string;
  className?: string;
  animationDelay?: boolean;
  delay?: number;
  tracking?: "wide" | "wider" | "widest" | string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: animationDelay
          ? stagger(0.2, { startDelay: delay })
          : stagger(delay),
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div
          className={`dark:text-white text-black text-2xl leading-snug tracking-${tracking} ${className}`}
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
