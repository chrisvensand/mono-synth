const presets = {
  "Arp": {
    volume: -6,
    oscillator: { detune: 0.0, type: "square", phase: 0.0 },
    filter: { frequency: 350, type: "lowpass", rolloff: -12 },
    envelope: { attack: 0.1, decay: 0.1, sustain: 0.8, release: 0.2 },
    filterEnvelope: { attack: 0.1, decay: 0.2, sustain: 0.5, release: 0.6 },
  },
  "Lost Woods": {
    volume: -6,
    oscillator: { detune: 0.3, type: "sine", phase: 2.0 },
    filter: { frequency: 620, type: "lowpass", rolloff: -48 },
    envelope: { attack: 0.1, decay: 0.5, sustain: 0.4, release: 0.5 },
    filterEnvelope: { attack: 0.5, decay: 0.1, sustain: 0.9, release: 5.0 },
  },
  "Space Bounce": {
    volume: -6,
    oscillator: { detune: 2, type: "fatsawtooth", phase: 1 },
    filter: { frequency: 320, type: "highpass", rolloff: -48 },
    envelope: { attack: 0.7, decay: 0.3, sustain: 0.3, release: 0.8 },
    filterEnvelope: { attack: 0.9, decay: 0.7, sustain: 0.6, release: 3.0 },
  },
  "Bit Organ": {
    volume: -6,
    oscillator: { detune: 0.2, type: "pwm", phase: 0.5 },
    filter: { frequency: 320, type: "peaking", rolloff: -48 },
    envelope: { attack: 3.0, decay: 0.7, sustain: 0.4, release: 0.2 },
    filterEnvelope: { attack: 1.0, decay: 0.4, sustain: 0.8, release: 4.0 },
  },
  "Earthbound": {
    volume: -6,
    oscillator: { detune: 0.1, type: "amsawtooth", phase: 2.0 },
    filter: { frequency: 120, type: "highshelf", rolloff: -12 },
    envelope: { attack: 1.0, decay: 0.9, sustain: 0.1, release: 0.3 },
    filterEnvelope: { attack: 0.2, decay: 0.1, sustain: 0.9, release: 5.0 },
  },
  "Earthbound 2": {
    volume: -6,
    oscillator: { detune: 0.1, type: "fmsquare", phase: 0.2 },
    filter: { frequency: 640, type: "allpass", rolloff: -12 },
    envelope: { attack: 1.0, decay: 0.9, sustain: 0.1, release: 0.3 },
    filterEnvelope: { attack: 1.0, decay: 0.4, sustain: 0.1, release: 0.5 },
  },
  "Nebulae": {
    volume: -6,
    oscillator: { detune: 0.5, type: "fatsquare4", phase: 0.5 },
    filter: { frequency: 340, type: "lowpass", rolloff: -48 },
    envelope: { attack: 2.0, decay: 1.4, sustain: 0.5, release: 0.3 },
    filterEnvelope: { attack: 0.4, decay: 0.9, sustain: 0.9, release: 2.0 },
  },
  "Event Horizon": {
    volume: -6,
    oscillator: { detune: 0.5, type: "pulse", phase: 0.1 },
    filter: { frequency: 240, type: "notch", rolloff: -24 },
    envelope: { attack: 1.0, decay: 0.0, sustain: 0.0, release: 0.1 },
    filterEnvelope: { attack: 0.5, decay: 0.4, sustain: 0.1, release: 0.5 },
  },
  "Dawn": {
    volume: -6,
    oscillator: { detune: 0.5, type: "fmsawtooth", phase: 0.1 },
    filter: { frequency: 10, type: "lowshelf", rolloff: -12 },
    envelope: { attack: 1.0, decay: 0.5, sustain: 0.1, release: 0.5 },
    filterEnvelope: { attack: 1.0, decay: 0.4, sustain: 0.5, release: 0.5 },
  },
  "Gem Recoil": {
    volume: -6,
    oscillator: { detune: 0.5, type: "amsawtooth", phase: 0.1 },
    filter: { frequency: 320, type: "highpass", rolloff: -48 },
    envelope: { attack: 0.2, decay: 0.5, sustain: 0.9, release: 0.5 },
    filterEnvelope: { attack: 0.5, decay: 0.4, sustain: 0.9, release: 0.1 },
  },
  "0x56E2F4": {
    volume: -6,
    oscillator: { detune: 0.5, type: "fatsquare", phase: 0.7 },
    filter: { frequency: 520, type: "highpass", rolloff: -48 },
    envelope: { attack: 0.2, decay: 0.2, sustain: 0.5, release: 1.0 },
    filterEnvelope: { attack: 0.5, decay: 0.8, sustain: 0.5, release: 1.0 },
  },
  "Deep Space": {
    volume: -6,
    oscillator: { detune: 0.5, type: "pwm", phase: 0.7 },
    filter: { frequency: 220, type: "lowpass", rolloff: -48 },
    envelope: { attack: 10.0, decay: 5.0, sustain: 0.2, release: 5.0 },
    filterEnvelope: { attack: 10.0, decay: 5.0, sustain: 0.2, release: 5.0 },
  },
  "Cutoff Again": {
    volume: -6,
    oscillator: { detune: 10.0, type: "sawtooth", phase: 0.5 },
    filter: { frequency: 420, type: "allpass", rolloff: -12 },
    envelope: { attack: 3.0, decay: 1.0, sustain: 0.1, release: 3.0 },
    filterEnvelope: { attack: 3.0, decay: 5.0, sustain: 0.1, release: 5.0 },
  },
};

export const PRESET_NAMES = Object.keys(presets);
export const DEFAULT_PRESET = "Arp";

export default presets;
