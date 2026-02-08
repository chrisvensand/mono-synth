import { modifyPreset, getFrequenciesForPitch, formatPresetNumber } from "./presetUtils";
import {
  WAVE_OPTIONS,
  FILTER_TYPES,
  ROLLOFF_OPTIONS,
  ENVELOPE_MAX,
  FREQUENCY_MAX,
  BASE_FREQUENCIES,
  DEFAULT_PITCH,
} from "./constants";

const makePresets = () => ({
  TestPreset: {
    volume: -6,
    oscillator: { detune: 0.5, type: "sine", phase: 1.0 },
    filter: { frequency: 350, type: "lowpass", rolloff: -12 },
    envelope: { attack: 0.1, decay: 0.2, sustain: 0.5, release: 0.3 },
    filterEnvelope: { attack: 0.2, decay: 0.3, sustain: 0.6, release: 0.4 },
  },
});

describe("modifyPreset", () => {
  it("returns a new object without mutating the original", () => {
    const original = makePresets();
    const result = modifyPreset(original, "TestPreset", "envelope", "attack", 0.5);
    expect(result).not.toBe(original);
    expect(result.TestPreset).not.toBe(original.TestPreset);
    expect(result.TestPreset.envelope).not.toBe(original.TestPreset.envelope);
    expect(original.TestPreset.envelope.attack).toBe(0.1);
  });

  it("modifies envelope attack correctly", () => {
    const presets = makePresets();
    const result = modifyPreset(presets, "TestPreset", "envelope", "attack", 0.5);
    expect(result.TestPreset.envelope.attack).toBe(ENVELOPE_MAX * Math.ceil(0.5 * 100) / 100);
  });

  it("modifies filterEnvelope sustain correctly", () => {
    const presets = makePresets();
    const result = modifyPreset(presets, "TestPreset", "filterEnvelope", "sustain", 0.8);
    expect(result.TestPreset.filterEnvelope.sustain).toBe(ENVELOPE_MAX * Math.ceil(0.8 * 100) / 100);
  });

  it("modifies oscillator detune correctly", () => {
    const presets = makePresets();
    const result = modifyPreset(presets, "TestPreset", "oscillator", "detune", 0.3);
    expect(result.TestPreset.oscillator.detune).toBe(ENVELOPE_MAX * Math.ceil(0.3 * 100) / 100);
  });

  it("modifies oscillator phase correctly", () => {
    const presets = makePresets();
    const result = modifyPreset(presets, "TestPreset", "oscillator", "phase", 0.7);
    expect(result.TestPreset.oscillator.phase).toBe(ENVELOPE_MAX * Math.ceil(0.7 * 100) / 100);
  });

  it("modifies oscillator type to correct wave option", () => {
    const presets = makePresets();
    const result = modifyPreset(presets, "TestPreset", "oscillator", "type", 0);
    expect(WAVE_OPTIONS).toContain(result.TestPreset.oscillator.type);
  });

  it("modifies oscillator type at max value", () => {
    const presets = makePresets();
    const result = modifyPreset(presets, "TestPreset", "oscillator", "type", 1);
    expect(result.TestPreset.oscillator.type).toBe(WAVE_OPTIONS[WAVE_OPTIONS.length - 1]);
  });

  it("modifies filter frequency correctly", () => {
    const presets = makePresets();
    const result = modifyPreset(presets, "TestPreset", "filter", "frequency", 0.5);
    expect(result.TestPreset.filter.frequency).toBe(Math.ceil(FREQUENCY_MAX * 0.5));
  });

  it("modifies filter type to correct filter option", () => {
    const presets = makePresets();
    const result = modifyPreset(presets, "TestPreset", "filter", "type", 0);
    expect(FILTER_TYPES).toContain(result.TestPreset.filter.type);
  });

  it("modifies filter type at max value", () => {
    const presets = makePresets();
    const result = modifyPreset(presets, "TestPreset", "filter", "type", 1);
    expect(result.TestPreset.filter.type).toBe(FILTER_TYPES[FILTER_TYPES.length - 1]);
  });

  it("modifies rolloff to correct option", () => {
    const presets = makePresets();
    const result = modifyPreset(presets, "TestPreset", "filter", "rolloff", 0);
    expect(ROLLOFF_OPTIONS).toContain(result.TestPreset.filter.rolloff);
  });

  it("modifies rolloff at max value", () => {
    const presets = makePresets();
    const result = modifyPreset(presets, "TestPreset", "filter", "rolloff", 0.99);
    expect(ROLLOFF_OPTIONS).toContain(result.TestPreset.filter.rolloff);
  });

  it("modifies volume via output panel", () => {
    const presets = makePresets();
    const result = modifyPreset(presets, "TestPreset", "output", "volume", 0.75);
    expect(result.TestPreset.volume).toBe(Math.ceil((0.75 - 0.5) * 20));
  });

  it("sets volume to negative when val < 0.5", () => {
    const presets = makePresets();
    const result = modifyPreset(presets, "TestPreset", "output", "volume", 0.2);
    expect(result.TestPreset.volume).toBeLessThan(0);
  });

  it("does not modify other presets", () => {
    const presets = {
      ...makePresets(),
      OtherPreset: {
        volume: -3,
        oscillator: { detune: 1, type: "square", phase: 0 },
        filter: { frequency: 100, type: "highpass", rolloff: -24 },
        envelope: { attack: 0.5, decay: 0.5, sustain: 0.5, release: 0.5 },
        filterEnvelope: { attack: 0.5, decay: 0.5, sustain: 0.5, release: 0.5 },
      },
    };
    const result = modifyPreset(presets, "TestPreset", "envelope", "attack", 0.9);
    expect(result.OtherPreset).toBe(presets.OtherPreset);
  });
});

describe("getFrequenciesForPitch", () => {
  it("returns base frequencies when pitch equals basePitch", () => {
    const result = getFrequenciesForPitch(BASE_FREQUENCIES, DEFAULT_PITCH, DEFAULT_PITCH);
    Object.keys(BASE_FREQUENCIES).forEach((key) => {
      expect(result[key]).toBeCloseTo(BASE_FREQUENCIES[key], 4);
    });
  });

  it("doubles frequencies when pitch is one octave up", () => {
    const result = getFrequenciesForPitch(BASE_FREQUENCIES, DEFAULT_PITCH + 1, DEFAULT_PITCH);
    Object.keys(BASE_FREQUENCIES).forEach((key) => {
      expect(result[key]).toBeCloseTo(BASE_FREQUENCIES[key] * 2, 4);
    });
  });

  it("halves frequencies when pitch is one octave down", () => {
    const result = getFrequenciesForPitch(BASE_FREQUENCIES, DEFAULT_PITCH - 1, DEFAULT_PITCH);
    Object.keys(BASE_FREQUENCIES).forEach((key) => {
      expect(result[key]).toBeCloseTo(BASE_FREQUENCIES[key] / 2, 4);
    });
  });

  it("returns correct frequencies for two octaves up", () => {
    const result = getFrequenciesForPitch(BASE_FREQUENCIES, DEFAULT_PITCH + 2, DEFAULT_PITCH);
    Object.keys(BASE_FREQUENCIES).forEach((key) => {
      expect(result[key]).toBeCloseTo(BASE_FREQUENCIES[key] * 4, 4);
    });
  });
});

describe("formatPresetNumber", () => {
  it("pads single digits with two zeros", () => {
    expect(formatPresetNumber(0)).toBe("000");
    expect(formatPresetNumber(5)).toBe("005");
    expect(formatPresetNumber(9)).toBe("009");
  });

  it("pads double digits with one zero", () => {
    expect(formatPresetNumber(10)).toBe("010");
    expect(formatPresetNumber(42)).toBe("042");
    expect(formatPresetNumber(99)).toBe("099");
  });

  it("does not pad triple digits", () => {
    expect(formatPresetNumber(100)).toBe("100");
    expect(formatPresetNumber(999)).toBe("999");
  });
});
