import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Tone from "tone";

export default function Key({
  letter,
  settings,
  isPressed,
  frequency,
  handleMouseDown,
  handleMouseUp,
}) {
  const synthRef = useRef(null);

  useEffect(() => {
    synthRef.current = new Tone.MonoSynth(settings).toMaster();
    return () => {
      if (synthRef.current) {
        synthRef.current.dispose();
        synthRef.current = null;
      }
    };
  }, [settings]);

  useEffect(() => {
    if (!synthRef.current) return;
    if (isPressed) {
      synthRef.current.triggerAttack(frequency);
    } else {
      synthRef.current.triggerRelease();
    }
  }, [isPressed, frequency]);

  const className = isPressed ? "pressed-key" : "key";

  return (
    <button
      id={letter}
      className={className}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {letter}
    </button>
  );
}

Key.propTypes = {
  letter: PropTypes.string.isRequired,
  settings: PropTypes.object.isRequired,
  isPressed: PropTypes.bool.isRequired,
  frequency: PropTypes.number.isRequired,
  handleMouseDown: PropTypes.func.isRequired,
  handleMouseUp: PropTypes.func.isRequired,
};
