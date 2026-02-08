import React, { useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import Key from "./Key.jsx";
import {
  BASE_FREQUENCIES,
  TOP_KEYS,
  BOTTOM_KEYS,
  ALL_KEYS,
  DEFAULT_PITCH,
} from "./constants";
import { getFrequenciesForPitch } from "./presetUtils";

export default function Keyboard({ preset, pitch }) {
  const [isPressed, setIsPressed] = useState(() => {
    const initial = {};
    ALL_KEYS.forEach((key) => {
      initial[key] = false;
    });
    return initial;
  });

  const frequencies = useMemo(
    () => getFrequenciesForPitch(BASE_FREQUENCIES, pitch, DEFAULT_PITCH),
    [pitch]
  );

  const pressKey = useCallback((k, pressed) => {
    const key = k.toUpperCase();
    setIsPressed((prev) => {
      if (key in prev && prev[key] !== pressed) {
        return { ...prev, [key]: pressed };
      }
      return prev;
    });
  }, []);

  const handleKeyDown = useCallback(
    (event) => pressKey(event.key, true),
    [pressKey]
  );

  const handleKeyUp = useCallback(
    (event) => pressKey(event.key, false),
    [pressKey]
  );

  const handleMouseDown = useCallback(
    (event) => pressKey(event.currentTarget.id, true),
    [pressKey]
  );

  const handleMouseUp = useCallback(
    (event) => pressKey(event.currentTarget.id, false),
    [pressKey]
  );

  return (
    <div
      className="input-box"
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      tabIndex="0"
    >
      <div className="keyboard">
        <div className="top-key-box">
          {TOP_KEYS.map((value) => (
            <Key
              key={value}
              letter={value}
              settings={preset}
              isPressed={isPressed[value]}
              frequency={frequencies[value]}
              handleMouseDown={handleMouseDown}
              handleMouseUp={handleMouseUp}
            />
          ))}
        </div>
        <div className="bottom-key-box">
          {BOTTOM_KEYS.map((value) => (
            <Key
              key={value}
              letter={value}
              settings={preset}
              isPressed={isPressed[value]}
              frequency={frequencies[value]}
              handleMouseDown={handleMouseDown}
              handleMouseUp={handleMouseUp}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

Keyboard.propTypes = {
  preset: PropTypes.object.isRequired,
  pitch: PropTypes.number.isRequired,
};
