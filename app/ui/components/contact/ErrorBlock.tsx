import React from "react";

const ErrorBlock = ({
  errors,
}: {
  errors: Record<string, string[] | undefined> | string;
}) => {
  console.log("ErrorBlock", errors);
  return (
    <div className=" mt-10 p-2 rounded-lg flex flex-col items-center justify-center bg-red-400 dark:bg-red-600">
      <ul className="">
        {typeof errors === "object" ? (
          Object.keys(errors).map((x, index) =>
            errors[x] ? (
              <li className={"list-disc"} key={index}>
                {errors[x]?.[0]}
              </li>
            ) : (
              <></>
            )
          )
        ) : (
          <li>{errors}</li>
        )}
      </ul>
    </div>
  );
};

export default ErrorBlock;
