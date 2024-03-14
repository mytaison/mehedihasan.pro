import Image, { StaticImageData } from "next/image";
import Button from "../shared/Button";

export type ProjectThumbnailDetails = {
  title: string;
  category: string;
};
interface ProjectItemProps {
  imgSrc: StaticImageData;
  altText: string;
  details: ProjectThumbnailDetails;
}

const ProjectThumbnailItem: React.FC<ProjectItemProps> = ({
  imgSrc,
  altText,
  details,
}) => {
  return (
    <div className="item  w-[120px] h-[170px] md:w-[130px] md:h-[190px]  lg:w-[150px] lg:h-[220px] shrink-0 relative">
      <Image
        src={imgSrc}
        alt={altText}
        className="w-full h-full object-cover object-left rounded-xl"
      ></Image>
      <div className="content absolute left-[10px] right-[10px] bottom-[10px] text-black">
        <div className="projectTitle font-sans font-bold z-10">
          {details.title}
        </div>
        <div className="projectCategory z-10">{details.category}</div>
      </div>
    </div>
  );
};

export default ProjectThumbnailItem;
