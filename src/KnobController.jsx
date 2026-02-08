/* Created by Daniel Subat */
import React, { useRef, useCallback, useState } from "react";
import PropTypes from "prop-types";

function convertRange(oldMin, oldMax, newMin, newMax, oldValue) {
  return ((oldValue - oldMin) * (newMax - newMin)) / (oldMax - oldMin) + newMin;
}

export default function KnobController({
  degrees,
  size,
  min,
  max,
  value,
  modifyPreset,
  onChange,
}) {
  const startAngle = (360 - degrees) / 2;
  const endAngle = startAngle + degrees;

  const initialDeg = Math.floor(
    convertRange(min, max, startAngle, endAngle, value)
  );

  const [deg, setDeg] = useState(initialDeg);
  const currentDegRef = useRef(initialDeg);

  const getDeg = useCallback(
    (cX, cY, pts) => {
      const x = cX - pts.x;
      const y = cY - pts.y;
      let d = (Math.atan(y / x) * 180) / Math.PI;
      if ((x < 0 && y >= 0) || (x < 0 && y < 0)) {
        d += 90;
      } else {
        d += 270;
      }
      return Math.min(Math.max(startAngle, d), endAngle);
    },
    [startAngle, endAngle]
  );

  const startDrag = useCallback(
    (e) => {
      e.preventDefault();
      const knob = e.target.getBoundingClientRect();
      const pts = {
        x: knob.left + knob.width / 2,
        y: knob.top + knob.height / 2,
      };

      const moveHandler = (moveEvent) => {
        let newDeg = getDeg(moveEvent.clientX, moveEvent.clientY, pts);
        if (newDeg === startAngle) newDeg--;
        currentDegRef.current = newDeg;

        const newValue = Math.floor(
          convertRange(startAngle, endAngle, min, max, newDeg)
        );
        const val = (newDeg - 44) / 271;

        setDeg(newDeg);
        modifyPreset(val);
        onChange(newValue);
      };

      const upHandler = () => {
        document.removeEventListener("mousemove", moveHandler);
        document.removeEventListener("mouseup", upHandler);
      };

      document.addEventListener("mousemove", moveHandler);
      document.addEventListener("mouseup", upHandler);
    },
    [getDeg, startAngle, endAngle, min, max, modifyPreset, onChange]
  );

  const kStyle = { width: size, height: size };
  const iStyle = { ...kStyle, transform: "rotate(" + deg + "deg)" };

  return (
    <div className="knob-controller">
      <div className="knob-outer" onMouseDown={startDrag}>
        <div className="knob-inner">
          <div className="grip" />
        </div>
        <img
          style={iStyle}
          src={process.env.PUBLIC_URL + "/assets/Knob.png"}
          alt="Knob"
        />
      </div>
    </div>
  );
}

KnobController.propTypes = {
  degrees: PropTypes.number.isRequired,
  size: PropTypes.number,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  modifyPreset: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
