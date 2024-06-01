import { Chord } from "./chords.types";

// All major, minor, sharp, and flat chords with their inversions in ABC notation
export const chords: Chord[] = [
  // Major Chords
  {
    name: "C",
    inversions: [
      {
        level: "Root",
        name: "C Major (Root Position)",
        abc: "X:1\nM:4/4\nK:C\nL:1/4\n[CEG]",
      },
      {
        level: "1st",
        name: "C Major (1st Inversion)",
        abc: "X:2\nM:4/4\nK:C\nL:1/4\n[EGC]",
      },
      {
        level: "2nd",
        name: "C Major (2nd Inversion)",
        abc: "X:3\nM:4/4\nK:C\nL:1/4\n[GCE]",
      },
    ],
    chord: "C",
    type: "Major",
    accidental: "natural",
  },
  {
    name: "D#",
    inversions: [
      {
        level: "Root",
        name: "D# Major (Root Position)",
        abc: "X:1\nM:4/4\nK:D\nL:1/4\n[DF#A]",
      },
      {
        level: "1st",
        name: "D# Major (1st Inversion)",
        abc: "X:2\nM:4/4\nK:D\nL:1/4\n[F#AD]",
      },
      {
        level: "2nd",
        name: "D# Major (2nd Inversion)",
        abc: "X:3\nM:4/4\nK:D\nL:1/4\n[ADF#]",
      },
    ],
    chord: "D",
    type: "Major",
    accidental: "#",
  },
  {
    name: "E#",
    inversions: [
      {
        level: "Root",
        name: "E# Major (Root Position)",
        abc: "X:1\nM:4/4\nK:E\nL:1/4\n[EG#B]",
      },
      {
        level: "1st",
        name: "E# Major (1st Inversion)",
        abc: "X:2\nM:4/4\nK:E\nL:1/4\n[G#BE]",
      },
      {
        level: "2nd",
        name: "E# Major (2nd Inversion)",
        abc: "X:3\nM:4/4\nK:E\nL:1/4\n[BEG#]",
      },
    ],
    chord: "E",
    type: "Major",
    accidental: "#",
  },
  {
    name: "F",
    inversions: [
      {
        level: "Root",
        name: "F Major (Root Position)",
        abc: "X:1\nM:4/4\nK:F\nL:1/4\n[FAC]",
      },
      {
        level: "1st",
        name: "F Major (1st Inversion)",
        abc: "X:2\nM:4/4\nK:F\nL:1/4\n[ACF]",
      },
      {
        level: "2nd",
        name: "F Major (2nd Inversion)",
        abc: "X:3\nM:4/4\nK:F\nL:1/4\n[CFA]",
      },
    ],
    chord: "F",
    type: "Major",
    accidental: "natural",
  },
  {
    name: "G",
    inversions: [
      {
        level: "Root",
        name: "G Major (Root Position)",
        abc: "X:1\nM:4/4\nK:G\nL:1/4\n[GBD]",
      },
      {
        level: "1st",
        name: "G Major (1st Inversion)",
        abc: "X:2\nM:4/4\nK:G\nL:1/4\n[BDG]",
      },
      {
        level: "2nd",
        name: "G Major (2nd Inversion)",
        abc: "X:3\nM:4/4\nK:G\nL:1/4\n[DGB]",
      },
    ],
    chord: "G",
    type: "Major",
    accidental: "natural",
  },
  {
    name: "A",
    inversions: [
      {
        level: "Root",
        name: "A Major (Root Position)",
        abc: "X:1\nM:4/4\nK:A\nL:1/4\n[ACE]",
      },
      {
        level: "1st",
        name: "A Major (1st Inversion)",
        abc: "X:2\nM:4/4\nK:A\nL:1/4\n[CEA]",
      },
      {
        level: "2nd",
        name: "A Major (2nd Inversion)",
        abc: "X:3\nM:4/4\nK:A\nL:1/4\n[EAC]",
      },
    ],
    chord: "A",
    type: "Major",
    accidental: "natural",
  },
  {
    name: "B",
    inversions: [
      {
        level: "Root",
        name: "B Major (Root Position)",
        abc: "X:1\nM:4/4\nK:B\nL:1/4\n[BDF#]",
      },
      {
        level: "1st",
        name: "B Major (1st Inversion)",
        abc: "X:2\nM:4/4\nK:B\nL:1/4\n[DF#B]",
      },
      {
        level: "2nd",
        name: "B Major (2nd Inversion)",
        abc: "X:3\nM:4/4\nK:B\nL:1/4\n[F#BD]",
      },
    ],
    chord: "B",
    type: "Major",
    accidental: "#",
  },
  // Continue adding minor chords...
  {
    name: "Cm",
    inversions: [
      {
        level: "Root",
        name: "C Minor (Root Position)",
        abc: "X:1\nM:4/4\nK:Cm\nL:1/4\n[CEbG]",
      },
      {
        level: "1st",
        name: "C Minor (1st Inversion)",
        abc: "X:2\nM:4/4\nK:Cm\nL:1/4\n[EbGC]",
      },
      {
        level: "2nd",
        name: "C Minor (2nd Inversion)",
        abc: "X:3\nM:4/4\nK:Cm\nL:1/4\n[GCEb]",
      },
    ],
    chord: "C",
    type: "Minor",
    accidental: "b",
  },
  {
    name: "Dm",
    inversions: [
      {
        level: "Root",
        name: "D Minor (Root Position)",
        abc: "X:1\nM:4/4\nK:Dm\nL:1/4\n[DFA]",
      },
      {
        level: "1st",
        name: "D Minor (1st Inversion)",
        abc: "X:2\nM:4/4\nK:Dm\nL:1/4\n[FAD]",
      },
      {
        level: "2nd",
        name: "D Minor (2nd Inversion)",
        abc: "X:3\nM:4/4\nK:Dm\nL:1/4\n[ADF]",
      },
    ],
    chord: "D",
    type: "Minor",
    accidental: "natural",
  },
  {
    name: "Em",
    inversions: [
      {
        level: "Root",
        name: "E Minor (Root Position)",
        abc: "X:1\nM:4/4\nK:Em\nL:1/4\n[EGB]",
      },
      {
        level: "1st",
        name: "E Minor (1st Inversion)",
        abc: "X:2\nM:4/4\nK:Em\nL:1/4\n[GBE]",
      },
      {
        level: "2nd",
        name: "E Minor (2nd Inversion)",
        abc: "X:3\nM:4/4\nK:Em\nL:1/4\n[BEG]",
      },
    ],
    chord: "E",
    type: "Minor",
    accidental: "natural",
  },
  {
    name: "Fm",
    inversions: [
      {
        level: "Root",
        name: "F Minor (Root Position)",
        abc: "X:1\nM:4/4\nK:Fm\nL:1/4\n[FAC]",
      },
      {
        level: "1st",
        name: "F Minor (1st Inversion)",
        abc: "X:2\nM:4/4\nK:Fm\nL:1/4\n[ACF]",
      },
      {
        level: "2nd",
        name: "F Minor (2nd Inversion)",
        abc: "X:3\nM:4/4\nK:Fm\nL:1/4\n[CFA]",
      },
    ],
    chord: "F",
    type: "Minor",
    accidental: "natural",
  },
];

