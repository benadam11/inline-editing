import React from "react";
import ReactTooltip from "react-tooltip";
import cx from "classnames";
import {
  upIcon,
  downIcon,
  trashIcon,
  moreIcon,
  imgIcon,
  leftIcon,
  rightIcon
} from "../Common/icons";

const iconMap = {
  up: upIcon,
  down: downIcon,
  trash: trashIcon,
  more: moreIcon,
  img: imgIcon,
  left: leftIcon,
  right: rightIcon
};

const messageMap = {
  up: "Move up",
  down: "Move down",
  trash: "Delete",
  more: "More settings",
  img: "Change image",
  left: "Move left",
  right: "Move right"
};

export const UtilityBarItem = ({
  icon,
  action,
  itemId = "",
  disabled = false,
  message = ""
}) => {
  const classNames = cx(`utility-bar-item ${icon}`, {
    disabled
  });
  return (
    <React.Fragment>
      <div
        data-tip={message || messageMap[icon]}
        data-for={icon}
        className={classNames}
        onClick={() => {
          action && action(itemId);
        }}
      >
        {iconMap[icon]}
      </div>
      <ReactTooltip id={icon} effect="solid" />
    </React.Fragment>
  );
};
