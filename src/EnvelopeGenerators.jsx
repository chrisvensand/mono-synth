import React from "react";
import PropTypes from "prop-types";
import EnvelopeBox from "./EnvelopeBox";

export default function EnvelopeGenerators({
  envelopeSettings,
  filterSettings,
  modifyPreset,
}) {
  return (
    <div className="envelope-generators">
      <div className="panel-label-center">Envelope Generators</div>
      <div className="knob-box">
        <EnvelopeBox
          type="filter-envelope-box"
          settings={filterSettings}
          modifyPreset={modifyPreset}
        />
        <EnvelopeBox
          type="amplitude-envelope-box"
          settings={envelopeSettings}
          modifyPreset={modifyPreset}
        />
      </div>
    </div>
  );
}

EnvelopeGenerators.propTypes = {
  envelopeSettings: PropTypes.object.isRequired,
  filterSettings: PropTypes.object.isRequired,
  modifyPreset: PropTypes.func.isRequired,
};
