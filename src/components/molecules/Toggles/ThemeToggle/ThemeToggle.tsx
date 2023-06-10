import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeToggle = () => {
  return (
    <div>
      <button
        className="btn btn-square text-lg"
        data-set-theme="winter"
        data-act-class="hidden"
      >
        <FontAwesomeIcon icon={faSun} />
      </button>
      <button
        className="btn btn-square text-lg"
        data-set-theme="dracula"
        data-act-class="hidden"
      >
        <FontAwesomeIcon icon={faMoon} />
      </button>
    </div>
  );
};

export default ThemeToggle;
