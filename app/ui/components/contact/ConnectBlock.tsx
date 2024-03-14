import React from "react";
import { FaGithub, FaLinkedinIn, FaRegEnvelope, FaSkype } from "react-icons/fa";

const ConnectBlock = () => {
  const btnStyle =
    "h-50 w-50 p-4 rounded-lg outline outline-1 outline-[#d1cece] dark:outline-[#676891] neumorph-convex dark:neumorph-convex-dark hover:neumorph-concave dark:hover:neumorph-flat-dark";
  return (
    <div className="formBlock flex flex-row gap-4 flex-wrap justify-evenly p-4 lg:p-8 2xl:p-16 rounded-lg neumorph-flat dark:neumorph-flat-dark w-full">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/mehedi-hasan-9a0680a4/"
      >
        <button className={`linkedin ${btnStyle}`}>
          <FaLinkedinIn size={50} />
        </button>
      </a>
      <a href="mailto:mehedihasan.devpro@gmail.com">
        <button className={`email ${btnStyle}`}>
          <FaRegEnvelope size={50} />
        </button>
      </a>
      <a href="skype:live:mytaison?add">
        <button className={`skype ${btnStyle}`}>
          <FaSkype size={50} />
        </button>
      </a>
      <a target="_blank" href="https://github.com/mytaison">
        <button className={`github ${btnStyle}`}>
          <FaGithub size={50} />
        </button>
      </a>
    </div>
  );
};

export default ConnectBlock;
