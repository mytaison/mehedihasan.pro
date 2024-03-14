import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  labelIcon?: IconType | null;
  className?: string;
  id?: string;
  themeBg?: boolean;
  anchor?: string;
}
const Button: React.FC<ButtonProps> = ({
  label,
  labelIcon: LabelIcon = null,
  className,
  id = `button_${label}`,
  themeBg = false,
  anchor = "#",
}) => {
  const bgStyle = themeBg
    ? "bg-[linear-gradient(145deg,#e6e6e6,#ffffff)] dark:bg-[linear-gradient(145deg,#434572,#24253f)] hover:bg-[#ffffff] dark:hover:bg-[#434572] text-gray-900 dark:text-gray-100 shadow-none"
    : "bg-[linear-gradient(145deg,#659ecd,#78bbf4)]  dark:bg-[linear-gradient(145deg,#d6b92a,#ffdc32)] hover:bg-[linear-gradient(45deg,#7fc5ff,#008bff)]  dark:hover:bg-[linear-gradient(145deg,#ffea84,#ffd300)] dark:text-gray-900";
  return (
    <a target="_blank" href={anchor}>
      <button
        type="button"
        className={`w-[120px] h-[50px] rounded-lg p-4 border-xl bg-blue-400 ${bgStyle} ${className} inline-flex items-center justify-center lg:gap-2`}
        id={id}
        title={label}
      >
        {LabelIcon ? <LabelIcon size={20}></LabelIcon> : ""}
        {label}
      </button>
    </a>
  );
};

export default Button;
