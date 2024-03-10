import Image from "next/image";
import DissapointedFace from "@/public/images/disspointed-face.png";
import SadFace from "@/public/images/frowning-face.png";
import { useState } from "react";

const ErrorNotifBlock = ({ errorMsg }: { errorMsg: string | object }) => {
  const [visible, setVisible] = useState(true);

  if (typeof errorMsg === "string") {
    return (
      <div
        className={`${
          visible ? "" : "hidden"
        } relative inline-flex flex-wrap items-center justify-center gap-2 neumorph-pressed-error dark:neumorph-pressed-error-dark rounded-xl w-full p-4 mb-4`}
      >
        <Image src={SadFace} alt="Sad face" width={25} height={25} />{" "}
        <span>{errorMsg}</span>
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
  } else {
    return (
      <div
        className={`${
          visible ? "" : "hidden"
        } relative inline-flex flex-wrap items-center justify-center gap-2 neumorph-pressed-error dark:neumorph-pressed-error-dark rounded-xl w-full p-4 mb-4`}
      >
        <Image src={DissapointedFace} alt="Sad face" width={25} height={25} />{" "}
        <span>Ops! Try again.</span>
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
  }
};

export default ErrorNotifBlock;
