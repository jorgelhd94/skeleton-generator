import { MouseEventHandler, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

type IconButtonProps = {
  icon: IconDefinition;
  showIcon: boolean;
  loading?: boolean;
  click?: MouseEventHandler;
  children?: ReactNode;
};

const IconButton = (props: IconButtonProps) => {
  
  return (
    <button
      className="btn btn-square text-lg"
      onClick={props.click}
    >
      {props.showIcon && (
        <FontAwesomeIcon
          icon={!props.loading ? props.icon : faSpinner}
          className={props.loading ? "fa-spin" : ""}
        />
      )}
      {props.children && <span className="ml-2">{props.children}</span>}
    </button>
  );
};

export default IconButton;
