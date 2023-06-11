import LogoButton from "../../molecules/LogoButton/LogoButton";
import ThemeToggle from "../../molecules/Toggles/ThemeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <LogoButton />
      </div>
      <div className="flex-none">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
