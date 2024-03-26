"use client";
import { StaticImageData } from "next/image";
import AirbnbCloneImg from "@/public/images/projects/airbnbClone.png";
import TravelLoopersImg from "@/public/images/projects/travelLoopers.png";
import EvoGymImg from "@/public/images/projects/evoGym.png";
import ProjectItem, { ProjectDetails } from "./ProjectItem";
import ProjectThumbnailItem from "./ProjectThumbnailItem";
import styles from "./Project.module.css";
import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type ProjectType = {
  img: StaticImageData;
  details: ProjectDetails;
};
const projectOne: ProjectType = {
  img: AirbnbCloneImg,
  details: {
    title: "Airybnb",
    category: "Full Stack",
    techs: [
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "MongoDB",
      "Prisma",
      "Cloudinary",
      "Next-Auth",
    ],
    gitLink: "https://github.com/mytaison/AirbnbClone",
    demoLink: "https://airybnb.mehedihasan.pro/",
    details:
      "This project is built with NextJS 14, TypeScript, Next-Auth, MongoDB, Prisma, TailwindCSS, Cloudinary. The sole purpose of this project is to explore the features of NextJS 14 and doing some UI practise. For state management I have used Zustand. To host the application I have used MongoDB Atlas, Vercel and Cloudinary services.",
  },
};

const projectTwo: ProjectType = {
  img: TravelLoopersImg,
  details: {
    title: "Travel Loopers",
    category: "Frontend",
    techs: ["HTML", "CSS", "SASS", "BEM"],
    gitLink: "https://github.com/mytaison/TravelLoopers",
    demoLink: "https://travelloopers.mehedihasan.pro/",
    details:
      "It's a showcase site for showing BEM methodology and SASS 7-1 Architecture",
  },
};

const projectThree: ProjectType = {
  img: EvoGymImg,
  details: {
    title: "EvoGym",
    category: "Frontend",
    techs: ["NextJS", "TailwindCSS", "Typescript"],
    gitLink: "https://github.com/mytaison/EvoGymLandingPage",
    demoLink: "https://evogym.mehedihasan.pro/",
    details:
      "React based site for gyms built using Vite, Typescript and TailwindCSS. I have used react-hook-form for forms, framer motion for animation",
  },
};

const Project = () => {
  const [documentReady, setDocumentReady] = useState(false);

  let timeRunning = 3000;
  let runTimeout = useRef(setTimeout(() => {}, 10));
  // let sliderItemsRef = useRef<HTMLCollection>();
  let sliderItems: NodeListOf<Element> | null;
  let thumbnailItems: NodeListOf<Element> | null;

  useEffect(() => {
    if (window.document) {
      setDocumentReady(true);
      console.log("Ready", document);
    }
  }, []);

  if (documentReady) {
    sliderItems = document.querySelectorAll(".carousel .list .item");
    thumbnailItems = document.querySelectorAll(".carousel .thumbnails .item");
  }
  const clickNext = useCallback(() => {
    if (documentReady && sliderItems && thumbnailItems) {
      console.log(sliderItems[0]);

      document.querySelector(".carousel .list")?.appendChild(sliderItems[0]);
      document
        .querySelector(".carousel .thumbnails")
        ?.appendChild(thumbnailItems[0]);
      document.querySelector(".carousel")?.classList.add("next");
      if (runTimeout != undefined) clearTimeout(runTimeout.current);
      runTimeout.current = setTimeout(
        () => document.querySelector(".carousel")?.classList.remove("next"),
        timeRunning
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
      sliderItems = document.querySelectorAll(".carousel .list .item");
      // eslint-disable-next-line react-hooks/exhaustive-deps
      thumbnailItems = document.querySelectorAll(".carousel .thumbnails .item");
    } else {
      console.log("Document not ready.");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documentReady]);

  const clickPrev = useCallback(() => {
    if (documentReady && sliderItems && thumbnailItems) {
      let positionLastItem = sliderItems.length - 1;
      console.log(sliderItems[positionLastItem]);
      document
        .querySelector(".carousel .list")
        ?.prepend(sliderItems[positionLastItem]);
      document
        .querySelector(".carousel .thumbnails")
        ?.prepend(thumbnailItems[positionLastItem]);
      document.querySelector(".carousel")?.classList.add("prev");

      if (runTimeout != undefined) clearTimeout(runTimeout.current);
      runTimeout.current = setTimeout(
        () => document.querySelector(".carousel")?.classList.remove("prev"),
        timeRunning
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
      sliderItems = document.querySelectorAll(".carousel .list .item");
      // eslint-disable-next-line react-hooks/exhaustive-deps
      thumbnailItems = document.querySelectorAll(".carousel .thumbnails .item");
    } else {
      console.log("Document not ready.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documentReady]);

  return (
    <section id="projects" className="container mx-auto">
      <div className="w-full p-4 mt-[102px] md:pt-[102px] md:mt-0 min-h-[calc(100dvh-87.19px)] lg:min-h-[calc(100dvh-102px)] flex flex-col gap-16 lg:gap-8">
        <div className="xl:pt-5 2xl:pt-10">
          <h1 className="text-3xl tracking-widest">Projects</h1>
          <h5 className="">Best way to tryout new things.</h5>
        </div>
        <div className="relative carousel w-full h-[calc(100vh-242.19px)] lg:h-[calc(100vh-224px)] overflow-hidden">
          <div className="list">
            <ProjectItem
              imgSrc={projectOne.img}
              altText={`Image of ${projectOne.details.title}`}
              details={projectOne.details}
            ></ProjectItem>
            <ProjectItem
              imgSrc={projectTwo.img}
              altText={`Image of ${projectTwo.details.title}`}
              details={projectTwo.details}
            ></ProjectItem>
            <ProjectItem
              imgSrc={projectThree.img}
              altText={`Image of ${projectThree.details.title}`}
              details={projectThree.details}
            ></ProjectItem>
          </div>
          <div className="thumbnails absolute bottom-[1rem] lg:bottom-[50px] left-[50%] w-max z-10 flex gap-4">
            <ProjectThumbnailItem
              imgSrc={projectTwo.img}
              altText={`Thumbnail of ${projectOne.details.title}`}
              details={{
                title: projectTwo.details.title,
                category: projectTwo.details.category,
              }}
            ></ProjectThumbnailItem>
            <ProjectThumbnailItem
              imgSrc={projectThree.img}
              altText={`Thumbnail of ${projectTwo.details.title}`}
              details={{
                title: projectThree.details.title,
                category: projectThree.details.category,
              }}
            ></ProjectThumbnailItem>
            <ProjectThumbnailItem
              imgSrc={projectOne.img}
              altText={`Thumbnail of ${projectThree.details.title}`}
              details={{
                title: projectOne.details.title,
                category: projectOne.details.category,
              }}
            ></ProjectThumbnailItem>
          </div>
          <div className="arrows absolute top-[80%] right-[52%] w-[300px] max-w-[30%] flex gap-4 items-center">
            <button
              type="button"
              id="prev"
              className="p-2 font-mono font-bold text-lg w-[40px] h-[40px] rounded-full bg-[#eee4] border-none duration-75 hover:bg-[#eee] hover:text-[#555] z-[20] flex items-center justify-center"
              onClick={clickPrev}
            >
              {"<"}
            </button>
            <button
              type="button"
              id="next"
              className="p-2 font-mono font-bold text-lg w-[40px] h-[40px] rounded-full bg-[#eee4] border-none duration-75 hover:bg-[#eee] hover:text-[#555] z-[20] flex items-center justify-center"
              onClick={clickNext}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
