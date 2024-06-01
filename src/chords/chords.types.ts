export interface Chord {
  chord: ChordNameType;
  type: ChordTypeType;
  accidental: ChordAccidentalType;
  name: string;
  inversions: Inversion[];
}

interface Inversion {
  level: "1st" | "2nd" | "Root";
  name: string;
  abc: string;
}

type ChordNameType = keyof typeof chordNames;
type ChordAccidentalType = keyof typeof chordAccidentals;
type ChordTypeType = keyof typeof chordTypes;

type ChordInversionFilterType = Array<"0" | "1" | "2">;
type ChordAccidentalFilterType = ChordAccidentalType[];
type ChordNameFilterType = ChordNameType[];
type ChordTypeFilterType = ChordTypeType[];

export interface FiltersType {
  inversion: ChordInversionFilterType;
  accidental: ChordAccidentalFilterType;
  chord: ChordNameFilterType;
  type: ChordTypeFilterType;
}

export const chordNames = {
  C: "C",
  D: "D",
  E: "E",
  F: "F",
  G: "G",
  A: "A",
  B: "B",
} as const;

export const chordAccidentals = {
  natural: "natural",
  "#": "#",
  b: "b",
} as const;

export const chordTypes = {
  Major: "Major",
  Minor: "Minor",
} as const;
