interface ButtonProps {
  label: string;
  className?: string;
  id?: string;
  themeBg?: boolean;
  anchor?: string;
}
const Button: React.FC<ButtonProps> = ({
  label,
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
        className={`w-[120px] h-[50px] rounded-lg p-4 border-xl bg-blue-400 ${bgStyle} ${className}`}
        id={id}
        title={label}
      >
        {label}
      </button>
    </a>
  );
};

export default Button;
