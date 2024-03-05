import { BiLogoJquery, BiLogoPostgresql } from "react-icons/bi";
import { DiNodejs, DiPhp } from "react-icons/di";
import { FaCss3, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { IoLogoLaravel, IoLogoPython } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { RiCodeBoxFill } from "react-icons/ri";
import {
  SiCplusplus,
  SiCsharp,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiWindowsterminal,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
  const iconStyle =
    "neumorph-tablets dark:neumorph-tablets-dark rounded-full w-[100px] h-[100px] flex items-center justify-center";
  return (
    <section id="skills" className="container mx-auto">
      <div className="w-full p-4 md:pt-[102px] min-h-[100dvh] flex flex-col gap-16 lg:gap-8">
        <div className="xl:pt-5 2xl:pt-10">
          <h1 className="text-3xl tracking-widest">SKILLS</h1>
          <h5 className="">Take a look!</h5>
        </div>
        <div className="flex flex-col md:flex-row gap-4 lg:gap-8 w-full">
          {/* ABOUT DETAILS BOXES */}
          <div className="skills w-full lg:w-4/6 flex flex-1 flex-col lg:grid flex-wrap gap-16 lg:gap-8">
            <div id="frontendSkillsBlock" className="flex-1">
              <h3 className="font-roboto font-bold text-gray-950 dark:text-gray-50 tracking-[.2em] text-xl mb-2">
                <span className="inline-flex justify-center items-center gap-2">
                  <MdDashboard size={30} />
                  FRONTEND
                </span>
              </h3>
              <div className="md:min-h-[250px] xl:min-h-[216px] p-4 md:p-10 rounded-xl flex items-center justify-center neumorph-convex dark:neumorph-convex-dark md:justify-between animate-opacityOnload">
                <div className="text-gray-700 dark:text-gray-200 w-full flex flex-wrap lg:flex-nowrap gap-2 justify-center lg:justify-between">
                  <div className={iconStyle}>
                    <FaHtml5 size={60} />
                  </div>
                  <div className={iconStyle}>
                    <FaCss3 size={60} />
                  </div>
                  <div className={iconStyle}>
                    <SiJavascript size={60} />
                  </div>
                  <div className={iconStyle}>
                    <FaReact size={60} />
                  </div>
                  <div className={iconStyle}>
                    <TbBrandNextjs size={60} />
                  </div>
                  <div className={iconStyle}>
                    <BiLogoJquery size={60} />
                  </div>
                  <div className={iconStyle}>
                    <SiTypescript size={60} />
                  </div>
                </div>
              </div>
            </div>
            <div id="backendSkillsBlock" className="flex-1">
              <h3 className="font-roboto font-bold text-gray-950 dark:text-gray-50 tracking-[.2em] text-xl mb-2">
                <span className="inline-flex justify-center items-center gap-2">
                  <RiCodeBoxFill size={30} />
                  BACKEND
                </span>
              </h3>
              <div className="md:min-h-[250px] xl:min-h-[216px] p-4 md:p-10 rounded-xl flex items-center justify-center neumorph-convex dark:neumorph-convex-dark md:justify-between animate-opacityOnload">
                <div className="text-gray-700 dark:text-gray-200 w-full flex flex-wrap lg:flex-nowrap gap-2 justify-center lg:justify-between">
                  <div className={iconStyle}>
                    <DiPhp size={60} />
                  </div>
                  <div className={iconStyle}>
                    <DiNodejs size={60} />
                  </div>
                  <div className={iconStyle}>
                    <SiExpress size={60} />
                  </div>
                  <div className={iconStyle}>
                    <IoLogoLaravel size={60} />
                  </div>
                  <div className={iconStyle}>
                    <SiMysql size={60} />
                  </div>
                  <div className={iconStyle}>
                    <BiLogoPostgresql size={60} />
                  </div>
                  <div className={iconStyle}>
                    <SiMongodb size={60} />
                  </div>
                </div>
              </div>
            </div>
            <div id="coreSkillsBlock" className="flex-1">
              <h3 className="font-roboto font-bold text-gray-950 dark:text-gray-50 tracking-[.2em] text-xl mb-2">
                <span className="inline-flex justify-center items-center gap-2">
                  <SiWindowsterminal size={30} />
                  CORE PROGRAMMING
                </span>
              </h3>
              <div className="md:min-h-[250px] xl:min-h-[216px] p-4 md:p-10 rounded-xl flex items-center justify-center neumorph-convex dark:neumorph-convex-dark md:justify-between animate-opacityOnload">
                <div className="text-gray-700 dark:text-gray-200 w-full flex flex-wrap lg:flex-nowrap gap-2 lg:gap-12 justify-center">
                  <div className={iconStyle}>
                    <IoLogoPython size={60} />
                  </div>
                  <div className={iconStyle}>
                    <FaJava size={60} />
                  </div>
                  <div className={iconStyle}>
                    <SiCsharp size={60} />
                  </div>
                  <div className={iconStyle}>
                    <SiCplusplus size={60} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
