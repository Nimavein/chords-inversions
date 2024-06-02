import { Chord } from "./chords.types";

export const chords: Chord[] = [
  {
    name: "C",
    inversions: [
      {
        level: "Root",
        name: "C",
        abc: "X:1\nM:4/4\nK:C\nL:1/4\n[CEG]",
      },
      {
        level: "1st",
        name: "C (1st)",
        abc: "X:2\nM:4/4\nK:C\nL:1/4\n[EGC]",
      },
      {
        level: "2nd",
        name: "C (2nd)",
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
        name: "C#",
        abc: "X:1\nM:4/4\nK:C#\nL:1/4\n[^C^E^G]",
      },
      {
        level: "1st",
        name: "C# (1st)",
        abc: "X:2\nM:4/4\nK:C#\nL:1/4\n[^E^GC]",
      },
      {
        level: "2nd",
        name: "C# (2nd)",
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
        name: "Db",
        abc: "X:1\nM:4/4\nK:Db\nL:1/4\n[_D_F_A]",
      },
      {
        level: "1st",
        name: "Db (1st)",
        abc: "X:2\nM:4/4\nK:Db\nL:1/4\n[_FA_D]",
      },
      {
        level: "2nd",
        name: "Db (2nd)",
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
        name: "D",
        abc: "X:1\nM:4/4\nK:D\nL:1/4\n[DF^A]",
      },
      {
        level: "1st",
        name: "D (1st)",
        abc: "X:2\nM:4/4\nK:D\nL:1/4\n[F^AD]",
      },
      {
        level: "2nd",
        name: "D (2nd)",
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
        name: "D#",
        abc: "X:1\nM:4/4\nK:D#\nL:1/4\n[^D^F^A]",
      },
      {
        level: "1st",
        name: "D# (1st)",
        abc: "X:2\nM:4/4\nK:D#\nL:1/4\n[^F^A^D]",
      },
      {
        level: "2nd",
        name: "D# (2nd)",
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
        name: "Eb",
        abc: "X:1\nM:4/4\nK:Eb\nL:1/4\n[_E_G_B]",
      },
      {
        level: "1st",
        name: "Eb (1st)",
        abc: "X:2\nM:4/4\nK:Eb\nL:1/4\n[G_B_E]",
      },
      {
        level: "2nd",
        name: "Eb (2nd)",
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
        name: "E",
        abc: "X:1\nM:4/4\nK:E\nL:1/4\n[EG^B]",
      },
      {
        level: "1st",
        name: "E (1st)",
        abc: "X:2\nM:4/4\nK:E\nL:1/4\n[G^BE]",
      },
      {
        level: "2nd",
        name: "E (2nd)",
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
        name: "F",
        abc: "X:1\nM:4/4\nK:F\nL:1/4\n[FAC]",
      },
      {
        level: "1st",
        name: "F (1st)",
        abc: "X:2\nM:4/4\nK:F\nL:1/4\n[ACF]",
      },
      {
        level: "2nd",
        name: "F (2nd)",
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
        name: "F#",
        abc: "X:1\nM:4/4\nK:F#\nL:1/4\n[^F^A^C]",
      },
      {
        level: "1st",
        name: "F# (1st)",
        abc: "X:2\nM:4/4\nK:F#\nL:1/4\n[^A^CF]",
      },
      {
        level: "2nd",
        name: "F# (2nd)",
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
        name: "Gb",
        abc: "X:1\nM:4/4\nK:Gb\nL:1/4\n[_G_B_D]",
      },
      {
        level: "1st",
        name: "Gb (1st)",
        abc: "X:2\nM:4/4\nK:Gb\nL:1/4\n[B_D_G]",
      },
      {
        level: "2nd",
        name: "Gb (2nd)",
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
        name: "G",
        abc: "X:1\nM:4/4\nK:G\nL:1/4\n[GBD]",
      },
      {
        level: "1st",
        name: "G (1st)",
        abc: "X:2\nM:4/4\nK:G\nL:1/4\n[BDG]",
      },
      {
        level: "2nd",
        name: "G (2nd)",
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
        name: "G#",
        abc: "X:1\nM:4/4\nK:G#\nL:1/4\n[^G^B^D]",
      },
      {
        level: "1st",
        name: "G# (1st)",
        abc: "X:2\nM:4/4\nK:G#\nL:1/4\n[^B^DG]",
      },
      {
        level: "2nd",
        name: "G# (2nd)",
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
        name: "Ab",
        abc: "X:1\nM:4/4\nK:Ab\nL:1/4\n[_A_C_E]",
      },
      {
        level: "1st",
        name: "Ab (1st)",
        abc: "X:2\nM:4/4\nK:Ab\nL:1/4\n[C_E_A]",
      },
      {
        level: "2nd",
        name: "Ab (2nd)",
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
        name: "A",
        abc: "X:1\nM:4/4\nK:A\nL:1/4\n[AC^E]",
      },
      {
        level: "1st",
        name: "A (1st)",
        abc: "X:2\nM:4/4\nK:A\nL:1/4\n[C^EA]",
      },
      {
        level: "2nd",
        name: "A (2nd)",
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
        name: "A#",
        abc: "X:1\nM:4/4\nK:A#\nL:1/4\n[^A^C^E]",
      },
      {
        level: "1st",
        name: "A# (1st)",
        abc: "X:2\nM:4/4\nK:A#\nL:1/4\n[^C^EA]",
      },
      {
        level: "2nd",
        name: "A# (2nd)",
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
        name: "Bb",
        abc: "X:1\nM:4/4\nK:Bb\nL:1/4\n[_B_D_F]",
      },
      {
        level: "1st",
        name: "Bb (1st)",
        abc: "X:2\nM:4/4\nK:Bb\nL:1/4\n[DFB]",
      },
      {
        level: "2nd",
        name: "Bb (2nd)",
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
        name: "B",
        abc: "X:1\nM:4/4\nK:B\nL:1/4\n[B^D^F]",
      },
      {
        level: "1st",
        name: "B (1st)",
        abc: "X:2\nM:4/4\nK:B\nL:1/4\n[^DFB]",
      },
      {
        level: "2nd",
        name: "B (2nd)",
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
        name: "Cm",
        abc: "X:1\nM:4/4\nK:Cm\nL:1/4\n[CEbG]",
      },
      {
        level: "1st",
        name: "Cm (1st)",
        abc: "X:2\nM:4/4\nK:Cm\nL:1/4\n[EbGC]",
      },
      {
        level: "2nd",
        name: "Cm (2nd)",
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
        name: "C#m",
        abc: "X:1\nM:4/4\nK:C#m\nL:1/4\n[^CE^G]",
      },
      {
        level: "1st",
        name: "C#m (1st)",
        abc: "X:2\nM:4/4\nK:C#m\nL:1/4\n[E^GC]",
      },
      {
        level: "2nd",
        name: "C#m (2nd)",
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
        name: "Dbm",
        abc: "X:1\nM:4/4\nK:Dbm\nL:1/4\n[_D_FA]",
      },
      {
        level: "1st",
        name: "Dbm (1st)",
        abc: "X:2\nM:4/4\nK:Dbm\nL:1/4\n[FA_D]",
      },
      {
        level: "2nd",
        name: "Dbm (2nd)",
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
        name: "Dm",
        abc: "X:1\nM:4/4\nK:Dm\nL:1/4\n[DFAD]",
      },
      {
        level: "1st",
        name: "Dm (1st)",
        abc: "X:2\nM:4/4\nK:Dm\nL:1/4\n[FAD]",
      },
      {
        level: "2nd",
        name: "Dm (2nd)",
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
        name: "D#m",
        abc: "X:1\nM:4/4\nK:D#m\nL:1/4\n[^DF^AD]",
      },
      {
        level: "1st",
        name: "D#m (1st)",
        abc: "X:2\nM:4/4\nK:D#m\nL:1/4\n[F^AD]",
      },
      {
        level: "2nd",
        name: "D#m (2nd)",
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
        name: "Ebm",
        abc: "X:1\nM:4/4\nK:Ebm\nL:1/4\n[_EG_B]",
      },
      {
        level: "1st",
        name: "Ebm (1st)",
        abc: "X:2\nM:4/4\nK:Ebm\nL:1/4\n[G_B_E]",
      },
      {
        level: "2nd",
        name: "Ebm (2nd)",
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
        name: "Em",
        abc: "X:1\nM:4/4\nK:Em\nL:1/4\n[EG^B]",
      },
      {
        level: "1st",
        name: "Em (1st)",
        abc: "X:2\nM:4/4\nK:Em\nL:1/4\n[G^BE]",
      },
      {
        level: "2nd",
        name: "Em (2nd)",
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
        name: "Fm",
        abc: "X:1\nM:4/4\nK:Fm\nL:1/4\n[FA_C]",
      },
      {
        level: "1st",
        name: "Fm (1st)",
        abc: "X:2\nM:4/4\nK:Fm\nL:1/4\n[ACF]",
      },
      {
        level: "2nd",
        name: "Fm (2nd)",
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
        name: "F#m",
        abc: "X:1\nM:4/4\nK:F#m\nL:1/4\n[^F^A^C]",
      },
      {
        level: "1st",
        name: "F#m (1st)",
        abc: "X:2\nM:4/4\nK:F#m\nL:1/4\n[^A^CF]",
      },
      {
        level: "2nd",
        name: "F#m (2nd)",
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
        name: "Gbm",
        abc: "X:1\nM:4/4\nK:Gbm\nL:1/4\n[_G_BD]",
      },
      {
        level: "1st",
        name: "Gbm (1st)",
        abc: "X:2\nM:4/4\nK:Gbm\nL:1/4\n[B_D_G]",
      },
      {
        level: "2nd",
        name: "Gbm (2nd)",
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
        name: "Gm",
        abc: "X:1\nM:4/4\nK:Gm\nL:1/4\n[GB^D]",
      },
      {
        level: "1st",
        name: "Gm (1st)",
        abc: "X:2\nM:4/4\nK:Gm\nL:1/4\n[B^DG]",
      },
      {
        level: "2nd",
        name: "Gm (2nd)",
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
        name: "G#m",
        abc: "X:1\nM:4/4\nK:G#m\nL:1/4\n[^G^B^D]",
      },
      {
        level: "1st",
        name: "G#m (1st)",
        abc: "X:2\nM:4/4\nK:G#m\nL:1/4\n[^B^DG]",
      },
      {
        level: "2nd",
        name: "G#m (2nd)",
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
        name: "Abm",
        abc: "X:1\nM:4/4\nK:Abm\nL:1/4\n[_A_CE]",
      },
      {
        level: "1st",
        name: "Abm (1st)",
        abc: "X:2\nM:4/4\nK:Abm\nL:1/4\n[CE_A]",
      },
      {
        level: "2nd",
        name: "Abm (2nd)",
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
        name: "Am",
        abc: "X:1\nM:4/4\nK:Am\nL:1/4\n[AC^E]",
      },
      {
        level: "1st",
        name: "Am (1st)",
        abc: "X:2\nM:4/4\nK:Am\nL:1/4\n[C^EA]",
      },
      {
        level: "2nd",
        name: "Am (2nd)",
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
        name: "A#m",
        abc: "X:1\nM:4/4\nK:A#m\nL:1/4\n[^A^C^E]",
      },
      {
        level: "1st",
        name: "A#m (1st)",
        abc: "X:2\nM:4/4\nK:A#m\nL:1/4\n[^C^EA]",
      },
      {
        level: "2nd",
        name: "A#m (2nd)",
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
        name: "Bbm",
        abc: "X:1\nM:4/4\nK:Bbm\nL:1/4\n[_B_DF]",
      },
      {
        level: "1st",
        name: "Bbm (1st)",
        abc: "X:2\nM:4/4\nK:Bbm\nL:1/4\n[DF_B]",
      },
      {
        level: "2nd",
        name: "Bbm (2nd)",
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
        name: "Bm",
        abc: "X:1\nM:4/4\nK:Bm\nL:1/4\n[B^D^F]",
      },
      {
        level: "1st",
        name: "Bm (1st)",
        abc: "X:2\nM:4/4\nK:Bm\nL:1/4\n[^DFB]",
      },
      {
        level: "2nd",
        name: "Bm (2nd)",
        abc: "X:3\nM:4/4\nK:Bm\nL:1/4\n[FB^D]",
      },
    ],
    chord: "B",
    type: "Minor",
    accidental: "natural",
  },
];

