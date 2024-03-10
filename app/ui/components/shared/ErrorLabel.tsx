import { array } from "zod";

interface ErrorLabelProps {
  formStateErrors: Record<string, string[] | undefined> | string;
  errorKey?: string;
}
type InputErrors = { [key: string]: any };

const ErrorLabel: React.FC<ErrorLabelProps> = ({
  formStateErrors,
  errorKey,
}) => {
  // console.log("form state errors", formStateErrors);
  let inputErrors: InputErrors = [];
  if (
    typeof formStateErrors === "object" &&
    Object.keys(formStateErrors).length > 0
  ) {
    Object.keys(formStateErrors).map(
      (key) => (inputErrors[key] = formStateErrors[key])
    );
  } else {
    inputErrors["others"] = formStateErrors;
  }

  if (errorKey && inputErrors[errorKey]) {
    return (
      // <></>
      <span key={errorKey} className="text-red-400 dark:text-red-400">
        {" "}
        - {inputErrors[errorKey]?.[0]}
      </span>
    );
  } else if (!errorKey && !inputErrors["others"]) {
    return (
      <span key={"others"} className="text-red-400 dark:text-red-400">
        {" "}
        - {inputErrors["others"]}
      </span>
    );
  } else {
    return <></>;
  }
};

export default ErrorLabel;
