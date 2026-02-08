export const WAVE_OPTIONS = [
  "sine",
  "square",
  "triangle",
  "sawtooth",
  "pulse",
  "fmsine",
  "fmsquare",
  "fmtriangle",
  "fmsawtooth",
  "pwm",
  "amsine",
  "amsquare",
  "amtriangle",
  "amsawtooth",
  "fatsine",
  "fatsquare",
  "fattriangle",
  "fatsawtooth",
];

export const FILTER_TYPES = [
  "lowpass",
  "highpass",
  "bandpass",
  "lowshelf",
  "highshelf",
  "notch",
  "allpass",
  "peaking",
];

export const ROLLOFF_OPTIONS = [-12, -24, -48, -96];

export const ENVELOPE_MAX = 5;
export const FREQUENCY_MAX = 940;
export const VOLUME_RANGE = 20;

export const BASE_FREQUENCIES = {
  "A": 261.6256,
  "S": 293.6648,
  "D": 329.6276,
  "F": 349.2282,
  "G": 391.9954,
  "H": 440.0000,
  "J": 493.8833,
  "K": 523.2511,
  "L": 587.3295,
  ";": 659.2551,
  "Q": 277.1826,
  "W": 311.1270,
  "E": 339.2863,
  "R": 369.9944,
  "T": 415.3047,
  "Y": 466.1638,
  "U": 508.3551,
  "I": 554.3653,
  "O": 622.2540,
  "P": 678.5727,
};

export const TOP_KEYS = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
export const BOTTOM_KEYS = ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";"];

export const ALL_KEYS = [...BOTTOM_KEYS, ...TOP_KEYS];

export const DEFAULT_PITCH = 3;
export const MIN_PITCH = 1;
export const MAX_PITCH = 5;
