import React, { useCallback } from "react";
import PropTypes from "prop-types";
import Knob from "./Knob.jsx";

export default function EnvelopeBox({ type, settings, modifyPreset }) {
  const handlePresetModification = useCallback(
    (setting, val) => {
      const panel = type === "filter-envelope-box" ? "filterEnvelope" : "envelope";
      modifyPreset(panel, setting, val);
    },
    [type, modifyPreset]
  );

  const label = type === "filter-envelope-box" ? "F" : "A";

  return (
    <div className={type}>
      <label className="envelope-label">{label}</label>
      <label className="attack-label">Attack</label>
      <Knob
        name="attack-knob"
        label="envelope-content"
        value={settings.attack}
        setting="attack"
        modifyPreset={handlePresetModification}
      />
      <label className="decay-label">Decay</label>
      <Knob
        name="decay-knob"
        label="envelope-content"
        value={settings.decay}
        setting="decay"
        modifyPreset={handlePresetModification}
      />
      <label className="sustain-label">Sustain</label>
      <Knob
        name="sustain-knob"
        label="envelope-content"
        value={settings.sustain}
        setting="sustain"
        modifyPreset={handlePresetModification}
      />
      <label className="release-label">Release</label>
      <Knob
        name="release-knob"
        label="envelope-content"
        value={settings.release}
        setting="release"
        modifyPreset={handlePresetModification}
      />
    </div>
  );
}

EnvelopeBox.propTypes = {
  type: PropTypes.string.isRequired,
  settings: PropTypes.shape({
    attack: PropTypes.number.isRequired,
    decay: PropTypes.number.isRequired,
    sustain: PropTypes.number.isRequired,
    release: PropTypes.number.isRequired,
  }).isRequired,
  modifyPreset: PropTypes.func.isRequired,
};
