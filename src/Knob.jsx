import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import KnobController from "./KnobController.jsx";

export default function Knob({ setting, name, value, label, modifyPreset }) {
  const [, setInternalValue] = useState(0);

  const handleChange = useCallback((newValue) => {
    setInternalValue(newValue);
  }, []);

  const handlePresetModification = useCallback(
    (val) => modifyPreset(setting, val),
    [modifyPreset, setting]
  );

  const isString = typeof value === "string";
  const contentClass = isString ? "string-knob-label" : label;

  return (
    <div className={name}>
      <img src={process.env.PUBLIC_URL + "/assets/Knob.png"} alt="Knob" />
      <KnobController
        className="knob-controller"
        modifyPreset={handlePresetModification}
        numTicks={25}
        degrees={270}
        min={1}
        max={100}
        value={30}
        onChange={handleChange}
      />
      <label className={contentClass}>{value}</label>
    </div>
  );
}

Knob.propTypes = {
  setting: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string,
  modifyPreset: PropTypes.func.isRequired,
};
