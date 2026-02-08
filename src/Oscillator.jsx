import React, { useCallback } from "react";
import PropTypes from "prop-types";
import Knob from "./Knob.jsx";

export default function Oscillator({ settings, modifyPreset }) {
  const handlePresetModification = useCallback(
    (setting, val) => modifyPreset("oscillator", setting, val),
    [modifyPreset]
  );

  return (
    <div className="oscillator" tabIndex="0">
      <div className="panel-label-left">Oscillator</div>
      <div className="knob-box">
        <label className="wave-label">Wave</label>
        <Knob
          setting="type"
          name="wave-knob"
          value={settings.type}
          modifyPreset={handlePresetModification}
        />
        <label className="detune-label">Detune</label>
        <Knob
          setting="detune"
          label="oscillator-content"
          name="detune-knob"
          value={settings.detune}
          modifyPreset={handlePresetModification}
        />
        <label className="phase-label">Phase</label>
        <Knob
          setting="phase"
          label="oscillator-content"
          name="phase-knob"
          value={settings.phase}
          modifyPreset={handlePresetModification}
        />
      </div>
    </div>
  );
}

Oscillator.propTypes = {
  settings: PropTypes.shape({
    type: PropTypes.string.isRequired,
    detune: PropTypes.number.isRequired,
    phase: PropTypes.number.isRequired,
  }).isRequired,
  modifyPreset: PropTypes.func.isRequired,
};
