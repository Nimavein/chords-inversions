import { Chord } from "./chords.types";

export const chords: Chord[] = [
  {
    name: "C",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:C\nL:1/4\n[CEG]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:C\nL:1/4\n[EGC]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:C\nL:1/4\n[GCE]",
      },
    ],
    chord: "C",
    type: "Major",
    accidental: "natural",
  },
  {
    name: "C#",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:C#\nL:1/4\n[^C^E^G]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:C#\nL:1/4\n[^E^GC]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:C#\nL:1/4\n[^GC^E]",
      },
    ],
    chord: "C",
    type: "Major",
    accidental: "#",
  },
  {
    name: "Db",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:Db\nL:1/4\n[_D_F_A]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:Db\nL:1/4\n[_FA_D]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:Db\nL:1/4\n[_A_D_F]",
      },
    ],
    chord: "D",
    type: "Major",
    accidental: "b",
  },
  {
    name: "D",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:D\nL:1/4\n[DF^A]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:D\nL:1/4\n[F^AD]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:D\nL:1/4\n[^ADF]",
      },
    ],
    chord: "D",
    type: "Major",
    accidental: "natural",
  },
  {
    name: "D#",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:D#\nL:1/4\n[^D^F^A]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:D#\nL:1/4\n[^F^A^D]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:D#\nL:1/4\n[^A^D^F]",
      },
    ],
    chord: "D",
    type: "Major",
    accidental: "#",
  },
  {
    name: "Eb",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:Eb\nL:1/4\n[_E_G_B]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:Eb\nL:1/4\n[G_B_E]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:Eb\nL:1/4\n[B_E_G]",
      },
    ],
    chord: "E",
    type: "Major",
    accidental: "b",
  },
  {
    name: "E",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:E\nL:1/4\n[EG^B]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:E\nL:1/4\n[G^BE]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:E\nL:1/4\n[^BEG]",
      },
    ],
    chord: "E",
    type: "Major",
    accidental: "natural",
  },
  {
    name: "F",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:F\nL:1/4\n[FAC]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:F\nL:1/4\n[ACF]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:F\nL:1/4\n[CFA]",
      },
    ],
    chord: "F",
    type: "Major",
    accidental: "natural",
  },
  {
    name: "F#",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:F#\nL:1/4\n[^F^A^C]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:F#\nL:1/4\n[^A^CF]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:F#\nL:1/4\n[^CF^A]",
      },
    ],
    chord: "F",
    type: "Major",
    accidental: "#",
  },
  {
    name: "Gb",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:Gb\nL:1/4\n[_G_B_D]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:Gb\nL:1/4\n[B_D_G]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:Gb\nL:1/4\n[D_G_B]",
      },
    ],
    chord: "G",
    type: "Major",
    accidental: "b",
  },
  {
    name: "G",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:G\nL:1/4\n[GBD]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:G\nL:1/4\n[BDG]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:G\nL:1/4\n[DGB]",
      },
    ],
    chord: "G",
    type: "Major",
    accidental: "natural",
  },
  {
    name: "G#",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:G#\nL:1/4\n[^G^B^D]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:G#\nL:1/4\n[^B^DG]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:G#\nL:1/4\n[^DG^B]",
      },
    ],
    chord: "G",
    type: "Major",
    accidental: "#",
  },
  {
    name: "Ab",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:Ab\nL:1/4\n[_A_C_E]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:Ab\nL:1/4\n[C_E_A]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:Ab\nL:1/4\n[E_A_C]",
      },
    ],
    chord: "A",
    type: "Major",
    accidental: "b",
  },
  {
    name: "A",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:A\nL:1/4\n[AC^E]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:A\nL:1/4\n[C^EA]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:A\nL:1/4\n[^EAC]",
      },
    ],
    chord: "A",
    type: "Major",
    accidental: "natural",
  },
  {
    name: "A#",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:A#\nL:1/4\n[^A^C^E]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:A#\nL:1/4\n[^C^EA]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:A#\nL:1/4\n[^E^AC]",
      },
    ],
    chord: "A",
    type: "Major",
    accidental: "#",
  },
  {
    name: "Bb",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:Bb\nL:1/4\n[_B_D_F]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:Bb\nL:1/4\n[DFB]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:Bb\nL:1/4\n[FB_D]",
      },
    ],
    chord: "B",
    type: "Major",
    accidental: "b",
  },
  {
    name: "B",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:B\nL:1/4\n[B^D^F]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:B\nL:1/4\n[^DFB]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:B\nL:1/4\n[FB^D]",
      },
    ],
    chord: "B",
    type: "Major",
    accidental: "natural",
  },
  {
    name: "Cm",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:Cm\nL:1/4\n[CEbG]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:Cm\nL:1/4\n[EbGC]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:Cm\nL:1/4\n[GCeb]",
      },
    ],
    chord: "C",
    type: "Minor",
    accidental: "natural",
  },
  {
    name: "C#m",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:C#m\nL:1/4\n[^CE^G]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:C#m\nL:1/4\n[E^GC]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:C#m\nL:1/4\n[^GC^E]",
      },
    ],
    chord: "C",
    type: "Minor",
    accidental: "#",
  },
  {
    name: "Dbm",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:Dbm\nL:1/4\n[_D_FA]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:Dbm\nL:1/4\n[FA_D]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:Dbm\nL:1/4\n[A_DF]",
      },
    ],
    chord: "D",
    type: "Minor",
    accidental: "b",
  },
  {
    name: "Dm",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:Dm\nL:1/4\n[DFAD]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:Dm\nL:1/4\n[FAD]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:Dm\nL:1/4\n[ADF]",
      },
    ],
    chord: "D",
    type: "Minor",
    accidental: "natural",
  },
  {
    name: "D#m",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:D#m\nL:1/4\n[^DF^AD]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:D#m\nL:1/4\n[F^AD]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:D#m\nL:1/4\n[ADF]",
      },
    ],
    chord: "D",
    type: "Minor",
    accidental: "#",
  },
  {
    name: "Ebm",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:Ebm\nL:1/4\n[_EG_B]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:Ebm\nL:1/4\n[G_B_E]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:Ebm\nL:1/4\n[B_EG]",
      },
    ],
    chord: "E",
    type: "Minor",
    accidental: "b",
  },
  {
    name: "Em",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:Em\nL:1/4\n[EG^B]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:Em\nL:1/4\n[G^BE]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:Em\nL:1/4\n[^BEG]",
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
        abc: "X:1\nM:4/4\nK:Fm\nL:1/4\n[FA_C]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:Fm\nL:1/4\n[ACF]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:Fm\nL:1/4\n[CFA]",
      },
    ],
    chord: "F",
    type: "Minor",
    accidental: "natural",
  },
  {
    name: "F#m",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:F#m\nL:1/4\n[^F^A^C]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:F#m\nL:1/4\n[^A^CF]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:F#m\nL:1/4\n[^CF^A]",
      },
    ],
    chord: "F",
    type: "Minor",
    accidental: "#",
  },
  {
    name: "Gbm",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:Gbm\nL:1/4\n[_G_BD]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:Gbm\nL:1/4\n[B_D_G]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:Gbm\nL:1/4\n[D_G_B]",
      },
    ],
    chord: "G",
    type: "Minor",
    accidental: "b",
  },
  {
    name: "Gm",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:Gm\nL:1/4\n[GB^D]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:Gm\nL:1/4\n[B^DG]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:Gm\nL:1/4\n[^DGB]",
      },
    ],
    chord: "G",
    type: "Minor",
    accidental: "natural",
  },
  {
    name: "G#m",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:G#m\nL:1/4\n[^G^B^D]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:G#m\nL:1/4\n[^B^DG]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:G#m\nL:1/4\n[^DG^B]",
      },
    ],
    chord: "G",
    type: "Minor",
    accidental: "#",
  },
  {
    name: "Abm",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:Abm\nL:1/4\n[_A_CE]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:Abm\nL:1/4\n[CE_A]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:Abm\nL:1/4\n[E_A_C]",
      },
    ],
    chord: "A",
    type: "Minor",
    accidental: "b",
  },
  {
    name: "Am",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:Am\nL:1/4\n[AC^E]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:Am\nL:1/4\n[C^EA]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:Am\nL:1/4\n[^EAC]",
      },
    ],
    chord: "A",
    type: "Minor",
    accidental: "natural",
  },
  {
    name: "A#m",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:A#m\nL:1/4\n[^A^C^E]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:A#m\nL:1/4\n[^C^EA]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:A#m\nL:1/4\n[^E^AC]",
      },
    ],
    chord: "A",
    type: "Minor",
    accidental: "#",
  },
  {
    name: "Bbm",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:Bbm\nL:1/4\n[_B_DF]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:Bbm\nL:1/4\n[DF_B]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:Bbm\nL:1/4\n[F_BD]",
      },
    ],
    chord: "B",
    type: "Minor",
    accidental: "b",
  },
  {
    name: "Bm",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nM:4/4\nK:Bm\nL:1/4\n[B^D^F]",
      },
      {
        level: "1st",
        abc: "X:2\nM:4/4\nK:Bm\nL:1/4\n[^DFB]",
      },
      {
        level: "2nd",
        abc: "X:3\nM:4/4\nK:Bm\nL:1/4\n[FB^D]",
      },
    ],
    chord: "B",
    type: "Minor",
    accidental: "natural",
  },
];

