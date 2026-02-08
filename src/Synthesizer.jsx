import React, { useState, useCallback } from "react";
import Oscillator from "./Oscillator.jsx";
import EnvelopeGenerators from "./EnvelopeGenerators.jsx";
import Filter from "./Filter.jsx";
import Output from "./Output.jsx";
import Presets from "./Presets.jsx";
import Keyboard from "./Keyboard.jsx";
import defaultPresets, { PRESET_NAMES, DEFAULT_PRESET } from "./presets";
import { DEFAULT_PITCH } from "./constants";
import { modifyPreset } from "./presetUtils";

export default function Synthesizer() {
  const [currentPreset, setCurrentPreset] = useState(DEFAULT_PRESET);
  const [presets, setPresets] = useState(defaultPresets);
  const [currentPitch] = useState(DEFAULT_PITCH);

  const handlePresetChange = useCallback((event) => {
    if (event.type === "click") {
      setCurrentPreset(event.currentTarget.id);
    }
  }, []);

  const handlePresetModification = useCallback(
    (panel, setting, val) => {
      setPresets((prev) => modifyPreset(prev, currentPreset, panel, setting, val));
    },
    [currentPreset]
  );

  const settings = presets[currentPreset];

  return (
    <div className="synthesizer">
      <img
        className="wood-background"
        src={process.env.PUBLIC_URL + "/assets/light_wood_panel.jpg"}
        alt="wood_panel"
      />
      <div className="bottom-panel">
        <Keyboard preset={settings} pitch={currentPitch} />
        <Presets
          presetNames={PRESET_NAMES}
          currentPreset={currentPreset}
          handlePresetChange={handlePresetChange}
        />
      </div>
      <div className="top-panel">
        <Oscillator
          settings={settings.oscillator}
          modifyPreset={handlePresetModification}
        />
        <EnvelopeGenerators
          envelopeSettings={settings.envelope}
          filterSettings={settings.filterEnvelope}
          modifyPreset={handlePresetModification}
        />
        <Filter settings={settings.filter} modifyPreset={handlePresetModification} />
        <Output settings={settings.volume} modifyPreset={handlePresetModification} />
      </div>
    </div>
  );
}
