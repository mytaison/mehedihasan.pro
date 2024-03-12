"use client";
import { GiGraduateCap } from "react-icons/gi";
import { MdWorkspacePremium } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import Image from "next/image";
import mehediHasanPic from "@/public/images/Me1.png";

const About = () => {
  const stylePTags = "text-gray-800 dark:text-gray-200 text-center";
  return (
    <section id="about" className="container mx-auto">
      <div className="w-full p-4 mt-[102px] md:pt-[102px] md:mt-0 min-h-[100dvh] flex flex-col gap-16 lg:gap-8 2xl:gap-16">
        <div className="xl:pt-5 2xl:pt-10">
          <h1 className="text-3xl tracking-widest">ABOUT ME</h1>
          <h5 className="">Details on me</h5>
        </div>

        <div className="flex flex-col md:flex-row gap-4 lg:gap-8 w-full">
          {/* ABOUT DETAILS BOXES */}
          <div className="aboutDetails w-full lg:w-4/6 flex flex-1 flex-col md:flex-row flex-wrap gap-16 md:gap-6 lg:gap-8">
            <div id="experienceBlock" className="flex-1">
              <h3 className="font-roboto font-bold text-gray-950 dark:text-gray-50 tracking-[.2em] text-xl mb-2">
                <span className="inline-flex justify-center items-center gap-2">
                  <MdWorkspacePremium size={30} />
                  EXPERIENCE
                </span>
              </h3>
              <div className="md:min-h-[256px] xl:min-h-[232px] p-4 md:p-6 lg:p-10 rounded-xl flex flex-col gap-2 items-center justify-center neumorph-flat dark:neumorph-flat-dark md:justify-between animate-opacityOnload">
                <p className={stylePTags}>
                  <span className="font-semibold text-lg">
                    5+ Years of Industry Experience
                  </span>
                </p>
                <p className={stylePTags}>Stitel Networks LLC, Tempe, AZ, US</p>
                <p className={stylePTags}>BroTecs Technologies Ltd Dhaka, BD</p>
              </div>
            </div>
            <div id="educationBlock" className=" flex-1">
              <h3 className="font-roboto font-bold text-gray-950 dark:text-gray-50 tracking-[.2em] text-xl mb-2">
                <span className="inline-flex justify-center items-center gap-2">
                  <GiGraduateCap size={30} />
                  EDUCATION
                </span>
              </h3>
              <div className="md:min-h-[256px] xl:min-h-[232px] p-4 md:p-6 lg:p-10 rounded-xl flex flex-col gap-2 items-center justify-center neumorph-flat dark:neumorph-flat-dark md:justify-between animate-opacityOnload">
                <p className={stylePTags}>
                  <span className="font-semibold text-lg">
                    MSc in Computer Science & Engineering
                  </span>
                </p>
                <p className={stylePTags}>
                  <span className="font-semibold text-lg">
                    BSc in Computer Science & Engineering
                  </span>
                </p>
                <p>North South University, Dhaka, BD</p>
              </div>
            </div>
            <div id="certificationBlock" className=" flex-1">
              <h3 className="font-roboto font-bold text-gray-950 dark:text-gray-50 tracking-[.2em] text-xl mb-2">
                <span className="inline-flex justify-center items-center gap-2">
                  <PiCertificateFill size={30} />
                  CERTIFICATION
                </span>
              </h3>
              <div className="md:min-h-[256px] xl:min-h-[232px] p-4 md:p-6 lg:p-10 rounded-xl flex flex-col gap-2 items-center justify-center neumorph-flat dark:neumorph-flat-dark md:justify-between animate-opacityOnload">
                <p className={stylePTags}>
                  <span className="font-semibold text-lg">
                    AWS Certified Cloud Practioner (CCP)
                  </span>
                </p>
                <p className={stylePTags}>
                  <span className="font-semibold text-lg">
                    Certified Scrum Master (CSM<sup>®</sup>)
                  </span>
                </p>
                <p className={stylePTags}>
                  <span className="font-semibold text-lg">
                    Certified Scrum Developer (CSD<sup>®</sup>)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 lg:gap-8 w-full mb-10">
          {/* PHOTO */}
          <div className="photo w-full lg:w-2/6  flex items-center justify-center before:w-[320px] before:h-[320px] before:absolute before:rounded-full before:neumorph-pressed before:dark:neumorph-pressed-dark">
            <Image
              src={mehediHasanPic}
              alt={"Picture of Mehedi Hasna"}
              width={270}
              height={270}
              className="hover:scale-125 transition-all rounded-full z-10"
            ></Image>
          </div>
          {/* ABOUT DETAILS PASSAGE*/}
          <div id="detailBlock" className="w-full lg:w-4/6 flex-nowrap">
            <div className="md:min-h-[250px] xl:min-h-[300px] p-4 md:p-10 rounded-xl flex items-center justify-center neumorph-convex dark:neumorph-convex-dark md:justify-between animate-opacityOnload">
              <p className="text-gray-800 dark:text-gray-200">
                Through out my career as a software engineer, I have played
                pivotal role in developing robust and secure solutions with
                BroTecs Technologies and Stitel Networks. My contributions
                consistently yielded exceptional results, driving success in
                delivering numerous R&D projects for Fortune 500 companies like
                Honeywell and Viasat. My specialization lies in web and cloud
                application development and I bring valuable full-stack
                proficiency to the table. I am skilled in both LAMP and MERN
                stack. My versatile skillset includes PHP, Laravel, JavaScript,
                React, NextJS, Python, ExpressJS, NodeJS, and AngularJS. This
                enables me to create holistic, end-to-end solutions that
                seamlessly integrate front-end and back-end components. I
                proudly hold a bouquet of certifications—each a testament to my
                dedication and expertise. From intricate brushstrokes of
                knowledge to bold strokes of achievement, these credentials
                reflect my commitment to continuous learning and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
