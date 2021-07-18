import Soundfont from "soundfont-player";

export const midiplayer = () => {
  Soundfont.instrument(new AudioContext(), "marimba").then(function (piano) {
    piano.play("B2");
  });
};
