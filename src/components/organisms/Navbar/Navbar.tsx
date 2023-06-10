import Logo from "../../atoms/Images/Logo/Logo";
import ThemeToggle from "../../molecules/Toggles/ThemeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn glass normal-case text-xl">
          <span className="mr-2">
            <Logo />
          </span>
          Skeleton Loader Generator
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
