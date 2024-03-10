import Image from "next/image";
import HappyFace from "@/public/images/happy-face.png";
import { useState } from "react";

const SuccessNotifBlock = ({ successMsg }: { successMsg: string }) => {
  const [visible, setVisible] = useState(true);
  return (
    <div
      className={`${
        visible ? "" : "hidden"
      } relative inline-flex flex-wrap items-center justify-center gap-2 neumorph-pressed-success dark:neumorph-pressed-success-dark rounded-xl w-full p-4 mb-4`}
    >
      <Image src={HappyFace} alt="Sad face" width={25} height={25} />{" "}
      <span>{successMsg}</span>
      <div
        onClick={() => {
          setVisible((prev) => !prev);
        }}
        className={`absolute flex h-5 w-5 rounded-full right-2 outline-1 outline-slate-600/20 outline bg-gray-500/20 text-gray-800 items-center justify-center cursor-pointer`}
      >
        x
      </div>
    </div>
  );
};

export default SuccessNotifBlock;
