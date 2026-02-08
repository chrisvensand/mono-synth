import React from "react";
import PropTypes from "prop-types";
import PresetList from "./PresetList.jsx";

export default function Presets({ presetNames, currentPreset, handlePresetChange }) {
  return (
    <div className="presets">
      <div className="preset-content">
        <div className="preset-header">
          <label className="preset-label">Preset: {currentPreset}</label>
        </div>
        <PresetList
          presetNames={presetNames}
          currentPreset={currentPreset}
          handlePresetChange={handlePresetChange}
        />
      </div>
    </div>
  );
}

Presets.propTypes = {
  presetNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentPreset: PropTypes.string.isRequired,
  handlePresetChange: PropTypes.func.isRequired,
};
