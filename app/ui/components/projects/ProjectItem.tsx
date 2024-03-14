import Image, { StaticImageData } from "next/image";
import Button from "../shared/Button";
import { FaGithub } from "react-icons/fa";

export type ProjectDetails = {
  title: string;
  category: string;
  techs: string[];
  gitLink: string;
  demoLink: string;
  details: string;
};
interface ProjectItemProps {
  imgSrc: StaticImageData;
  altText: string;
  details: ProjectDetails;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  imgSrc,
  altText,
  details,
}) => {
  return (
    <div className="item absolute top-0 left-0 right-0 bottom-0">
      <Image
        src={imgSrc}
        alt={altText}
        className="w-full h-full object-cover"
        priority={false}
      ></Image>
      <div className="content absolute w-full h-full top-0 left-0 p-8 pt-12 md:p-10 md:pt-24 bg-black/80 dark:bg-[#23243d]/80 box-border translate-x-[0px] text-white flex flex-col gap-1 md:gap-2 lg:gap-4">
        <div className="projectTitle relative font-bold tracking-wide md:tracking-[14px] text-xl md:text-5xl z-10">
          {details.title.toUpperCase()}
        </div>
        <div className="projectCategory relative font-bold tracking-wide md:tracking-widest text-lg md:text-xl text-blue-400 dark:text-yellow-400 z-10">
          {details.category.toUpperCase()}
        </div>
        <div className="projectTechs relative z-10">
          <ul className="list-none p-2 pl-0 inline-flex flex-wrap gap-2">
            {details.techs.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="projectButtons grid grid-cols-[repeat(2,130px)]">
          <Button
            label={"Github"}
            labelIcon={FaGithub}
            anchor={details.gitLink}
            className="projectGit"
            themeBg={true}
          ></Button>
          <Button
            label={"Live Demo"}
            anchor={details.demoLink}
            className="projectDemoLink"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
