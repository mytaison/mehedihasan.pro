import { BsFillGridFill } from "react-icons/bs";
const NavMenu = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="flex lg:hidden text-2xl dark:text-yellow-300 w-2/6">
      <button
        type="button"
        className="navmenu dark:navmenu-dark rounded-full flex items-center justify-center"
        onClick={onClick}
      >
        <BsFillGridFill size={30}></BsFillGridFill>
      </button>
    </div>
  );
};

export default NavMenu;
