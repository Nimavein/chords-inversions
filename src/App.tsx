import { useState, useEffect, useRef } from "react";
import abcjs from "abcjs";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  SelectChangeEvent,
  useMediaQuery,
  Container,
} from "@mui/material";
import { chords } from "./chords/chords";
import {
  Chord,
  FiltersType,
  chordAccidentals,
  chordNames,
  chordTypes,
} from "./chords/chords.types";
import "./App.css";

const App = () => {
  const [filters, setFilters] = useState<FiltersType>({
    inversion: [],
    accidental: [],
    chord: [],
    type: [],
  });
  const [filteredChords, setFilteredChords] = useState(chords);
  const [selectedChordIndex, setSelectedChordIndex] = useState<number | null>(null);
  const [selectedInversionIndex, setSelectedInversionIndex] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [intervalSeconds, setIntervalSeconds] = useState<number>(10);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [visualObject, setVisualObject] = useState<abcjs.TuneObject>();
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const abcContainerRef = useRef<HTMLDivElement | null>(null);
  const selectedChord = filteredChords[selectedChordIndex || 0];

  const getInversionToDisplay = (chord: Chord) => {
    return chord.inversions[selectedInversionIndex];
  };

  useEffect(() => {
    filterChords();
    chooseRandomChord();
  }, [filters]);

  useEffect(() => {
    if (abcContainerRef.current && selectedChordIndex !== null) {
      const newVisualObject = abcjs.renderAbc(
        abcContainerRef.current,
        getInversionToDisplay(selectedChord)?.abc,
        {
          responsive: "resize",
          add_classes: true,
          staffwidth: isDesktop ? 600 : 200,
        }
      );
      setVisualObject(newVisualObject[0]);
    }
  }, [selectedChord, isDesktop]);

  useEffect(() => {
    if (isPlaying) {
      const id = setInterval(() => {
        chooseRandomChord();
      }, intervalSeconds * 1000);
      setIntervalId(id);
    } else {
      if (intervalId) clearInterval(intervalId);
      setIntervalId(null);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPlaying, intervalSeconds]);

  const filterChords = () => {
    const filtered = chords.filter((chord) => {
      return (
        (filters.accidental.length === 0 || filters.accidental.includes(chord.accidental)) &&
        (filters.chord.length === 0 || filters.chord.includes(chord.chord)) &&
        (filters.type.length === 0 || filters.type.includes(chord.type))
      );
    });
    setFilteredChords(filtered);
  };

  const handleFilterChange = (event: SelectChangeEvent<string[]>) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const chooseRandomChord = () => {
    if (filteredChords.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredChords.length);
      if (filters.inversion.length > 0) {
        const inversionIndex = Math.floor(Math.random() * filters.inversion.length);
        setSelectedInversionIndex(parseInt(filters.inversion[inversionIndex]));
      } else {
        const randomInversionIndex = Math.floor(Math.random() * 3);
        setSelectedInversionIndex(randomInversionIndex);
      }
      setSelectedChordIndex(randomIndex);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleIntervalChange = (event: SelectChangeEvent<number>) => {
    const value = parseInt(event.target.value as string, 10);
    setIntervalSeconds(value);
  };

  const playChord = async () => {
    const synth = new abcjs.synth.CreateSynth();
    const audioContext = new AudioContext();
    await synth.init({
      audioContext,
      visualObj: visualObject,
      millisecondsPerMeasure: 500,
    });
    await synth.prime();
    synth.start();
  };

  return (
    <Container classes={["main-container"]}>
      <Typography variant="h1" fontSize={32} gutterBottom>
        Chord Inversions
      </Typography>
      <Box mb={2} display="flex" gap={2}>
        <Box width="50%">
          <FormControl fullWidth margin="normal">
            <InputLabel id="inversion-label">Inversion</InputLabel>
            <Select
              labelId="inversion-label"
              name="inversion"
              value={filters.inversion}
              onChange={handleFilterChange}
              multiple
            >
              <MenuItem value="0">Root</MenuItem>
              <MenuItem value="1">1st</MenuItem>
              <MenuItem value="2">2nd</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel id="accidental-label">Accidental</InputLabel>
            <Select
              labelId="accidental-label"
              name="accidental"
              value={filters.accidental}
              onChange={handleFilterChange}
              multiple
            >
              {Object.values(chordAccidentals).map((chordAccidental) => (
                <MenuItem key={chordAccidental} value={chordAccidental}>
                  {chordAccidental}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box width="50%">
          <FormControl fullWidth margin="normal">
            <InputLabel id="chord-label">Chord</InputLabel>
            <Select
              labelId="chord-label"
              name="chord"
              value={filters.chord}
              onChange={handleFilterChange}
              multiple
            >
              {Object.values(chordNames).map((chordName) => (
                <MenuItem key={chordName} value={chordName}>
                  {chordName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel id="type-label">Type</InputLabel>
            <Select
              labelId="type-label"
              name="type"
              value={filters.type}
              onChange={handleFilterChange}
              multiple
            >
              {Object.values(chordTypes).map((chordType) => (
                <MenuItem key={chordType} value={chordType}>
                  {chordType}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box gap={2} display="flex">
        <Button variant="contained" color="primary" onClick={handlePlayPause}>
          {isPlaying ? "Stop Interval" : "Start Interval"}
        </Button>
        <Select value={intervalSeconds} onChange={handleIntervalChange}>
          <MenuItem value={5}>5 seconds</MenuItem>
          <MenuItem value={10}>10 seconds</MenuItem>
          <MenuItem value={15}>15 seconds</MenuItem>
        </Select>
      </Box>
      <Box mb={2} mt={4}>
        {selectedChordIndex !== null && selectedChord && (
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Typography
              bgcolor="#ab003c"
              color="white"
              variant="h2"
              fontSize="2rem"
              borderRadius={2}
              textAlign="center"
              paddingX={2}
              paddingY={6}
              minWidth={300}
            >
              {`${selectedChord.name}${
                getInversionToDisplay(selectedChord).level === "Root"
                  ? ""
                  : ` (${getInversionToDisplay(selectedChord).level})`
              }`}
            </Typography>
            <Box marginY={2} ref={abcContainerRef} />
          </Box>
        )}
      </Box>
      <Box marginTop="auto" marginBottom={6} gap={2} display="flex" flexDirection={isDesktop ? "row" : "column"}>
        <Button size="large" variant="contained" color="primary" onClick={playChord}>
          Play Chord
        </Button>
        <Button size="large" variant="contained" color="secondary" onClick={chooseRandomChord}>
          Get a Random Chord
        </Button>
      </Box>
    </Container>
  );
};

export default App;




