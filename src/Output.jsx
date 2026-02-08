import React, { useCallback } from "react";
import PropTypes from "prop-types";
import Knob from "./Knob.jsx";

export default function Output({ settings, modifyPreset }) {
  const handlePresetModification = useCallback(
    (setting, val) => modifyPreset("output", setting, val),
    [modifyPreset]
  );

  return (
    <div className="output">
      <div className="panel-label-right">Output</div>
      <div className="knob-box">
        <label className="volume-label">Volume</label>
        <Knob
          name="volume-knob"
          label="volume-content"
          value={settings}
          setting="volume"
          modifyPreset={handlePresetModification}
        />
      </div>
    </div>
  );
}

Output.propTypes = {
  settings: PropTypes.number.isRequired,
  modifyPreset: PropTypes.func.isRequired,
};
