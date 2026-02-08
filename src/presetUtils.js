import {
  WAVE_OPTIONS,
  FILTER_TYPES,
  ROLLOFF_OPTIONS,
  ENVELOPE_MAX,
  FREQUENCY_MAX,
  VOLUME_RANGE,
} from "./constants";

export function modifyPreset(presets, currentPreset, panel, setting, val) {
  const preset = { ...presets[currentPreset] };

  if (panel === "filterEnvelope" || panel === "envelope") {
    preset[panel] = {
      ...preset[panel],
      [setting]: ENVELOPE_MAX * Math.ceil(val * 100) / 100,
    };
  }

  if (panel === "oscillator" && (setting === "detune" || setting === "phase")) {
    preset[panel] = {
      ...preset[panel],
      [setting]: ENVELOPE_MAX * Math.ceil(val * 100) / 100,
    };
  }

  if (panel === "oscillator" && setting === "type") {
    const index = Math.ceil((WAVE_OPTIONS.length - 1) * val);
    preset[panel] = {
      ...preset[panel],
      [setting]: WAVE_OPTIONS[index],
    };
  }

  if (setting === "frequency") {
    preset[panel] = {
      ...preset[panel],
      [setting]: Math.ceil(FREQUENCY_MAX * val),
    };
  }

  if (panel === "filter" && setting === "type") {
    const index = Math.ceil((FILTER_TYPES.length - 1) * val);
    preset[panel] = {
      ...preset[panel],
      [setting]: FILTER_TYPES[index],
    };
  }

  if (setting === "rolloff") {
    const index = Math.floor((ROLLOFF_OPTIONS.length - 1) * val);
    preset[panel] = {
      ...preset[panel],
      [setting]: ROLLOFF_OPTIONS[index],
    };
  }

  if (panel === "output") {
    preset[setting] = Math.ceil((val - 0.5) * VOLUME_RANGE);
  }

  return {
    ...presets,
    [currentPreset]: preset,
  };
}

export function getFrequenciesForPitch(baseFrequencies, pitch, basePitch) {
  const ratio = Math.pow(2, pitch - basePitch);
  const result = {};
  for (const key in baseFrequencies) {
    result[key] = baseFrequencies[key] * ratio;
  }
  return result;
}

export function formatPresetNumber(num) {
  if (num < 10) return "00" + String(num);
  if (num < 100) return "0" + String(num);
  return String(num);
}
