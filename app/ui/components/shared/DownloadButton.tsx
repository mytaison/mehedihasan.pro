"use client";

interface DownloadButtonProps {
  onClick: () => void;
  label: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="neumorph-flat dark:neumorph-flat-dark hover:neumorph-convex hover:dark:neumorph-convex-dark max-w-[240px] p-4 flex items-center justify-center gap-4 rounded-xl"
    >
      <svg
        className="w-6 h-6 text-blue-500 dark:text-yellow-300 animate-bounce"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
      {label}
    </button>
  );
};

export default DownloadButton;
