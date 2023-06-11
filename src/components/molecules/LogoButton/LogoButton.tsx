import LogoImage from "../../atoms/Images/Logo/Logo";
import style from "./LogoButton.module.css";

const LogoButton = () => {
  return (
    <div className={style.logoBtn}>
      <a className="btn glass normal-case text-xl">
        <span className="mr-2">
          <LogoImage />
        </span>
        Skeleton Loader Generator
      </a>
    </div>
  );
};

export default LogoButton;
