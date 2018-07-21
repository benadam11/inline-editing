import React from "react";
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

export const UtilityBarItem = ({
  icon,
  action,
  itemId = "",
  disabled = false
}) => {
  const classNames = cx(`utility-bar-item ${icon}`, {
    disabled
  });
  return (
    <div
      className={classNames}
      onClick={() => {
        action(itemId);
      }}
    >
      {iconMap[icon]}
    </div>
  );
};
