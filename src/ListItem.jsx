import React from "react";
import PropTypes from "prop-types";
import { formatPresetNumber } from "./presetUtils";

export default function ListItem({
  name,
  presetNumber,
  currentPreset,
  handlePresetChange,
}) {
  const isActive = currentPreset === name;
  const activeState = isActive ? "active" : "not-active";

  return (
    <li
      id={name}
      className={activeState}
      onClick={handlePresetChange}
      onKeyDown={handlePresetChange}
      tabIndex="0"
    >
      <div className="contents">
        <div className="number">{formatPresetNumber(presetNumber)}</div>
        <div className="name">{name}</div>
      </div>
    </li>
  );
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  presetNumber: PropTypes.number.isRequired,
  currentPreset: PropTypes.string.isRequired,
  handlePresetChange: PropTypes.func.isRequired,
};
