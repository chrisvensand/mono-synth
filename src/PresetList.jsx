import React from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem.jsx";

export default function PresetList({ presetNames, currentPreset, handlePresetChange }) {
  return (
    <ol className="preset-vertical-menu">
      {presetNames.map((value, index) => (
        <ListItem
          key={value}
          name={value}
          presetNumber={index}
          currentPreset={currentPreset}
          handlePresetChange={handlePresetChange}
        />
      ))}
    </ol>
  );
}

PresetList.propTypes = {
  presetNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentPreset: PropTypes.string.isRequired,
  handlePresetChange: PropTypes.func.isRequired,
};
