"use client";
import { TextGenerateEffect } from "@/app/ui/components/animations/textGenerationEffect";
import { Suspense } from "react";
import { TypewriterEffectSmooth } from "../animations/typeWriterEffect";

const words = `
Hello! I am
`;
const words2 = `
Mehedi Hasan
`;
const words3 = `
Software Engineer and Full Stack Web Developer.
`;

const typeWriterWords = [
  {
    text: "Mehedi Hasan",
    className: "font-mudhoney text-3xl py-5 tracking-[0.05em]",
  },
];

export function WelcomeBlock() {
  return (
    <div className="p-6 text-2xl font-semibold flex flex-col gap-1">
      <Suspense>
        <TextGenerateEffect words={words} />
        <TextGenerateEffect
          words={words2}
          className="font-mudhoney md:text-3xl lg:text-4xl xl:text-6xl md:py-3 tracking-[0.2em]"
          animationDelay={true}
          delay={2}
          tracking="0.2em"
        />
        <TextGenerateEffect
          words={words3}
          className="text-2xl md:text-3xl lg:text-4xl"
          animationDelay={true}
          delay={3}
        />
      </Suspense>
    </div>
  );
}
