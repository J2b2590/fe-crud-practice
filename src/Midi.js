import Soundfont from "soundfont-player";

export const midiplayerB2 = () => {
  Soundfont.instrument(new AudioContext(), "marimba").then(function (piano) {
    piano.play("B2");
  });
};

export const midiplayerA2 = () => {
  Soundfont.instrument(new AudioContext(), "marimba").then(function (piano) {
    piano.play("A2");
  });
};

export const midiplayerC2 = () => {
    Soundfont.instrument(new AudioContext(), "marimba").then(function (piano) {
      piano.play("C2");
    });
  };
  
