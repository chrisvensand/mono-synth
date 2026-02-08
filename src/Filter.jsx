import React, { useCallback } from "react";
import PropTypes from "prop-types";
import Knob from "./Knob.jsx";

export default function Filter({ settings, modifyPreset }) {
  const handlePresetModification = useCallback(
    (setting, val) => modifyPreset("filter", setting, val),
    [modifyPreset]
  );

  return (
    <div className="filter">
      <div className="panel-label-center">Filter</div>
      <div className="knob-box">
        <label className="frequency-label">Frequency</label>
        <Knob
          name="frequency-knob"
          label="filter-content"
          value={settings.frequency}
          setting="frequency"
          modifyPreset={handlePresetModification}
        />
        <label className="type-label">Type</label>
        <Knob
          name="type-knob"
          value={settings.type}
          setting="type"
          modifyPreset={handlePresetModification}
        />
        <label className="rolloff-label">Rolloff</label>
        <Knob
          name="rolloff-knob"
          label="filter-content"
          value={settings.rolloff}
          setting="rolloff"
          modifyPreset={handlePresetModification}
        />
      </div>
    </div>
  );
}

Filter.propTypes = {
  settings: PropTypes.shape({
    frequency: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rolloff: PropTypes.number.isRequired,
  }).isRequired,
  modifyPreset: PropTypes.func.isRequired,
};
