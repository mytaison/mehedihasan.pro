"use client";
import { useEffect } from "react";
import { useFormStatus } from "react-dom";

interface SendButtonProps {
  onClick: (value: boolean) => void;
}
const SendButton: React.FC<SendButtonProps> = ({
  onClick: toggleFormStatus,
}) => {
  const { pending, data } = useFormStatus();
  // console.log("data:", data);
  useEffect(() => {
    toggleFormStatus(pending);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pending]);
  return (
    <button
      type="submit"
      className={`btn group bg-[#6fafe4] dark:bg-yellow-300 dark:text-gray-950 text-semibold inline-flex px-4 py-3 rounded-xl cursor-pointer transition-all duration-[2s] overflow-hidden items-center disabled:pointer-events-none`}
      aria-disabled={pending}
      disabled={pending}
    >
      {pending ? (
        <>
          <div className="svg-wrapper-1 inline-flex scale-[110%]">
            <div className="svg-wrapper animate-[fly_0.6s_ease-in-out_infinite_alternate]">
              <svg
                className=" group-hover:rotate-45 transition-all duration-500 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span className="ml-3 transition-all duration-300 ease-in-out">
            Sending...
          </span>
        </>
      ) : (
        <>
          <div className="svg-wrapper-1 inline-flex group-hover:scale-[110%]">
            <div className="svg-wrapper group-hover:animate-[fly_0.6s_ease-in-out_infinite_alternate]">
              <svg
                className=" group-hover:rotate-45 group-hover:scale-x-110 group-hover:translate-x-4 transition-all duration-500 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span className="ml-3 transition-all duration-300 ease-in-out group-hover:translate-x-20">
            Send
          </span>
        </>
      )}
    </button>
  );
};

export default SendButton;
