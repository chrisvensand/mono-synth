import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("tone", () => {
  function MockMonoSynth() {
    this.triggerAttack = jest.fn();
    this.triggerRelease = jest.fn();
    this.dispose = jest.fn();
    this.toMaster = jest.fn(() => this);
  }
  return { MonoSynth: MockMonoSynth };
});

import App from "./App.jsx";
import ListItem from "./ListItem.jsx";
import Presets from "./Presets.jsx";
import PresetList from "./PresetList.jsx";
import EnvelopeGenerators from "./EnvelopeGenerators.jsx";
import Filter from "./Filter.jsx";
import Oscillator from "./Oscillator.jsx";
import Output from "./Output.jsx";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(document.querySelector(".main-view")).toBeInTheDocument();
  });

  it("renders the GitHub link pointing to the project", () => {
    render(<App />);
    const link = document.querySelector(".github-ref");
    expect(link).toHaveAttribute(
      "href",
      "https://github.com/chrisvensand/mono-synth"
    );
  });
});

describe("ListItem", () => {
  const defaultProps = {
    name: "Arp",
    presetNumber: 0,
    currentPreset: "Arp",
    handlePresetChange: jest.fn(),
  };

  it("renders the preset name and number", () => {
    render(<ListItem {...defaultProps} />);
    expect(screen.getByText("Arp")).toBeInTheDocument();
    expect(screen.getByText("000")).toBeInTheDocument();
  });

  it("has active class when current preset matches", () => {
    const { container } = render(<ListItem {...defaultProps} />);
    expect(container.querySelector("li")).toHaveClass("active");
  });

  it("has not-active class when current preset does not match", () => {
    const { container } = render(
      <ListItem {...defaultProps} currentPreset="Other" />
    );
    expect(container.querySelector("li")).toHaveClass("not-active");
  });

  it("calls handlePresetChange on click", () => {
    const handler = jest.fn();
    const { container } = render(
      <ListItem {...defaultProps} handlePresetChange={handler} />
    );
    fireEvent.click(container.querySelector("li"));
    expect(handler).toHaveBeenCalledTimes(1);
  });
});

describe("PresetList", () => {
  it("renders all preset names", () => {
    const names = ["Arp", "Lost Woods", "Dawn"];
    render(
      <PresetList
        presetNames={names}
        currentPreset="Arp"
        handlePresetChange={jest.fn()}
      />
    );
    names.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });
});

describe("Presets", () => {
  it("shows the current preset label", () => {
    render(
      <Presets
        presetNames={["Arp", "Dawn"]}
        currentPreset="Dawn"
        handlePresetChange={jest.fn()}
      />
    );
    expect(screen.getByText("Preset: Dawn")).toBeInTheDocument();
  });
});

describe("Oscillator", () => {
  it("renders wave, detune, and phase labels", () => {
    render(
      <Oscillator
        settings={{ type: "sine", detune: 0.5, phase: 1.0 }}
        modifyPreset={jest.fn()}
      />
    );
    expect(screen.getByText("Wave")).toBeInTheDocument();
    expect(screen.getByText("Detune")).toBeInTheDocument();
    expect(screen.getByText("Phase")).toBeInTheDocument();
  });

  it("displays the panel label", () => {
    render(
      <Oscillator
        settings={{ type: "sine", detune: 0.5, phase: 1.0 }}
        modifyPreset={jest.fn()}
      />
    );
    expect(screen.getByText("Oscillator")).toBeInTheDocument();
  });
});

describe("Filter", () => {
  it("renders frequency, type, and rolloff labels", () => {
    render(
      <Filter
        settings={{ frequency: 350, type: "lowpass", rolloff: -12 }}
        modifyPreset={jest.fn()}
      />
    );
    expect(screen.getByText("Frequency")).toBeInTheDocument();
    expect(screen.getByText("Type")).toBeInTheDocument();
    expect(screen.getByText("Rolloff")).toBeInTheDocument();
  });
});

describe("EnvelopeGenerators", () => {
  const envelope = { attack: 0.1, decay: 0.2, sustain: 0.5, release: 0.3 };

  it("renders the panel label", () => {
    render(
      <EnvelopeGenerators
        envelopeSettings={envelope}
        filterSettings={envelope}
        modifyPreset={jest.fn()}
      />
    );
    expect(screen.getByText("Envelope Generators")).toBeInTheDocument();
  });

  it("renders F and A envelope labels", () => {
    render(
      <EnvelopeGenerators
        envelopeSettings={envelope}
        filterSettings={envelope}
        modifyPreset={jest.fn()}
      />
    );
    expect(screen.getByText("F")).toBeInTheDocument();
    expect(screen.getByText("A")).toBeInTheDocument();
  });
});

describe("Output", () => {
  it("renders the volume label", () => {
    render(<Output settings={-6} modifyPreset={jest.fn()} />);
    expect(screen.getByText("Volume")).toBeInTheDocument();
  });

  it("renders the panel label", () => {
    render(<Output settings={-6} modifyPreset={jest.fn()} />);
    expect(screen.getByText("Output")).toBeInTheDocument();
  });
});
