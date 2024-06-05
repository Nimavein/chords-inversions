import { Chord } from "./chords.types";

export const chords: Chord[] = [
  {
    name: "C",
    inversions: [
      {
        level: "Root",
        abc: "X:1\nK:C\nL:1/4\n[CEG]",
      },
      {
        level: "1st",
        abc: "X:2\nK:C\nL:1/4\n[EGc]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:C\nL:1/4\n[Gce]",
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
        abc: "X:1\nK:C#\nL:1/4\n[^CF^G]",
      },
      {
        level: "1st",
        abc: "X:2\nK:C#\nL:1/4\n[F^G^c]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:C#\nL:1/4\n[^G^cf]",
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
        abc: "X:1\nK:Db\nL:1/4\n[_DF_A]",
      },
      {
        level: "1st",
        abc: "X:2\nK:Db\nL:1/4\n[F_A_d]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:Db\nL:1/4\n[_A_df]",
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
        abc: "X:1\nK:D\nL:1/4\n[D^FA]",
      },
      {
        level: "1st",
        abc: "X:2\nK:D\nL:1/4\n[^FAd]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:D\nL:1/4\n[Ad^f]",
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
        abc: "X:1\nK:D#\nL:1/4\n[^DG^A]",
      },
      {
        level: "1st",
        abc: "X:2\nK:D#\nL:1/4\n[G^A^d]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:D#\nL:1/4\n[^A^dg]",
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
        abc: "X:1\nK:Eb\nL:1/4\n[_EG_B]",
      },
      {
        level: "1st",
        abc: "X:2\nK:Eb\nL:1/4\n[G_B_e]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:Eb\nL:1/4\n[_B_eg]",
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
        abc: "X:1\nK:E\nL:1/4\n[E^GB]",
      },
      {
        level: "1st",
        abc: "X:2\nK:E\nL:1/4\n[^GBe]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:E\nL:1/4\n[Be^g]",
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
        abc: "X:1\nK:F\nL:1/4\n[FAc]",
      },
      {
        level: "1st",
        abc: "X:2\nK:F\nL:1/4\n[Acf]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:F\nL:1/4\n[cfa]",
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
        abc: "X:1\nK:F#\nL:1/4\n[^F^A^c]",
      },
      {
        level: "1st",
        abc: "X:2\nK:F#\nL:1/4\n[^A^c^f]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:F#\nL:1/4\n[^c^f^a]",
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
        abc: "X:1\nK:Gb\nL:1/4\n[_G_B_d]",
      },
      {
        level: "1st",
        abc: "X:2\nK:Gb\nL:1/4\n[_B_d_g]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:Gb\nL:1/4\n[_d_g_b]",
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
        abc: "X:1\nK:G\nL:1/4\n[GBd]",
      },
      {
        level: "1st",
        abc: "X:2\nK:G\nL:1/4\n[Bdg]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:G\nL:1/4\n[dgb]",
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
        abc: "X:1\nK:G#\nL:1/4\n[^Gc^d]",
      },
      {
        level: "1st",
        abc: "X:2\nK:G#\nL:1/4\n[c^d^g]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:G#\nL:1/4\n[^d^gc']",
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
        abc: "X:1\nK:Ab\nL:1/4\n[_Ac_e]",
      },
      {
        level: "1st",
        abc: "X:2\nK:Ab\nL:1/4\n[c_e_a]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:Ab\nL:1/4\n[_e_ac']",
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
        abc: "X:1\nK:A\nL:1/4\n[A^ce]",
      },
      {
        level: "1st",
        abc: "X:2\nK:A\nL:1/4\n[^cea]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:A\nL:1/4\n[ea^c']",
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
        abc: "X:1\nK:A#\nL:1/4\n[^Adf]",
      },
      {
        level: "1st",
        abc: "X:2\nK:A#\nL:1/4\n[df^a]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:A#\nL:1/4\n[f^ad']",
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
        abc: "X:1\nK:Bb\nL:1/4\n[_Bdf]",
      },
      {
        level: "1st",
        abc: "X:2\nK:Bb\nL:1/4\n[df_b]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:Bb\nL:1/4\n[f_bd']",
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
        abc: "X:1\nK:B\nL:1/4\n[B^d^f]",
      },
      {
        level: "1st",
        abc: "X:2\nK:B\nL:1/4\n[^d^fb]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:B\nL:1/4\n[^fb^d']",
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
        abc: "X:1\nK:Cm\nL:1/4\n[C_EG]",
      },
      {
        level: "1st",
        abc: "X:2\nK:Cm\nL:1/4\n[_EGc]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:Cm\nL:1/4\n[Gc_e]",
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
        abc: "X:1\nK:C#m\nL:1/4\n[^CE^G]",
      },
      {
        level: "1st",
        abc: "X:2\nK:C#m\nL:1/4\n[E^G^c]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:C#m\nL:1/4\n[^G^ce]",
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
        abc: "X:1\nK:Dbm\nL:1/4\n[_DE_A]",
      },
      {
        level: "1st",
        abc: "X:2\nK:Dbm\nL:1/4\n[E_A_d]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:Dbm\nL:1/4\n[_A_de]",
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
        abc: "X:1\nK:Dm\nL:1/4\n[DFA]",
      },
      {
        level: "1st",
        abc: "X:2\nK:Dm\nL:1/4\n[FAd]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:Dm\nL:1/4\n[Adf]",
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
        abc: "X:1\nK:D#m\nL:1/4\n[^D^F^A]",
      },
      {
        level: "1st",
        abc: "X:2\nK:D#m\nL:1/4\n[^F^A^d]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:D#m\nL:1/4\n[^A^d^f]",
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
        abc: "X:1\nK:Ebm\nL:1/4\n[_E_G_B]",
      },
      {
        level: "1st",
        abc: "X:2\nK:Ebm\nL:1/4\n[_G_B_e]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:Ebm\nL:1/4\n[_B_e_g]",
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
        abc: "X:1\nK:Em\nL:1/4\n[EGB]",
      },
      {
        level: "1st",
        abc: "X:2\nK:Em\nL:1/4\n[GBe]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:Em\nL:1/4\n[Beg]",
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
        abc: "X:1\nK:Fm\nL:1/4\n[F_Ac]",
      },
      {
        level: "1st",
        abc: "X:2\nK:Fm\nL:1/4\n[_Acf]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:Fm\nL:1/4\n[cf_a]",
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
        abc: "X:1\nK:F#m\nL:1/4\n[^FA^c]",
      },
      {
        level: "1st",
        abc: "X:2\nK:F#m\nL:1/4\n[A^c^f]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:F#m\nL:1/4\n[^c^fa]",
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
        abc: "X:1\nK:Gbm\nL:1/4\n[_GA_d]",
      },
      {
        level: "1st",
        abc: "X:2\nK:Gbm\nL:1/4\n[A_d_g]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:Gbm\nL:1/4\n[_d_ga]",
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
        abc: "X:1\nK:Gm\nL:1/4\n[G_Bd]",
      },
      {
        level: "1st",
        abc: "X:2\nK:Gm\nL:1/4\n[_Bdg]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:Gm\nL:1/4\n[dg_b]",
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
        abc: "X:1\nK:G#m\nL:1/4\n[^GB^d]",
      },
      {
        level: "1st",
        abc: "X:2\nK:G#m\nL:1/4\n[B^d^g]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:G#m\nL:1/4\n[^d^gb]",
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
        abc: "X:1\nK:Abm\nL:1/4\n[_AB_e]",
      },
      {
        level: "1st",
        abc: "X:2\nK:Abm\nL:1/4\n[B_e_a]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:Abm\nL:1/4\n[_e_ab]",
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
        abc: "X:1\nK:Am\nL:1/4\n[Ace]",
      },
      {
        level: "1st",
        abc: "X:2\nK:Am\nL:1/4\n[cea]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:Am\nL:1/4\n[eac']",
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
        abc: "X:1\nK:A#m\nL:1/4\n[^A^ce]",
      },
      {
        level: "1st",
        abc: "X:2\nK:A#m\nL:1/4\n[^ce^a]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:A#m\nL:1/4\n[e^a^c']",
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
        abc: "X:1\nK:Bbm\nL:1/4\n[_B_df]",
      },
      {
        level: "1st",
        abc: "X:2\nK:Bbm\nL:1/4\n[_df_b]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:Bbm\nL:1/4\n[f_b_d']",
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
        abc: "X:1\nK:Bm\nL:1/4\n[Bd^f]",
      },
      {
        level: "1st",
        abc: "X:2\nK:Bm\nL:1/4\n[d^fb]",
      },
      {
        level: "2nd",
        abc: "X:3\nK:Bm\nL:1/4\n[^fbd']",
      },
    ],
    chord: "B",
    type: "Minor",
    accidental: "natural",
  },
];

