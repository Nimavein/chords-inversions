/* eslint-disable react-hooks/exhaustive-deps */
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
  IconButton,
} from "@mui/material";
import { chords as baseChords } from "./chords/chords";
import { FiltersType, chordAccidentals, chordNames, chordTypes } from "./chords/chords.types";
import { VolumeUp, VolumeOff } from "@mui/icons-material";
import "./App.css";

const maxChordsAmount = 10;

const App = () => {
  const [filters, setFilters] = useState<FiltersType>({
    inversion: [],
    accidental: [],
    chord: [],
    type: [],
  });
  const [chords, setChords] = useState(baseChords);
  const [selectedChords, setSelectedChords] = useState<number[]>([]);
  const [selectedInversionIndices, setSelectedInversionIndices] = useState<number[]>([]);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [intervalSeconds, setIntervalSeconds] = useState<number>(10);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [visualObject, setVisualObject] = useState<abcjs.TuneObject | null>(null);
  const [isChordPlayingOnChange, setIsChordPlayingOnChange] = useState<boolean>(false);
  const [numberOfChords, setNumberOfChords] = useState<number>(1);
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const abcContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chooseRandomChords();
  }, []);

  useEffect(() => {
    if (abcContainerRef.current && selectedChords.length > 0) {
      const abcString = selectedChords
        .map((selectedChordIndex, i) => {
          const selectedChord = chords[selectedChordIndex];
          const selectedInversion = selectedChord?.inversions[selectedInversionIndices[i]];
          const chordABC = selectedInversion?.abc.match(/\[.*?\]/g)?.join("") || "";
          return i === 0 && numberOfChords === 1 ? selectedInversion?.abc : chordABC;
        })
        .join(" ");
      const newVisualObject = abcjs.renderAbc(abcContainerRef.current, abcString, {
        responsive: "resize",
        add_classes: true,
        staffwidth: isDesktop ? 600 : 200,
      });
      setVisualObject(newVisualObject[0]);
    }
  }, [selectedChords, isDesktop, selectedInversionIndices]);

  useEffect(() => {
    if (isChordPlayingOnChange && visualObject) {
      playChord();
    }
  }, [visualObject]);

  useEffect(() => {
    if (isPlaying) {
      const id = setInterval(() => {
        chooseRandomChords();
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

  const getFilteredChords = () => {
    const filtered = baseChords.filter((chord) => {
      return (
        (filters.accidental.length === 0 || filters.accidental.includes(chord.accidental)) &&
        (filters.chord.length === 0 || filters.chord.includes(chord.chord)) &&
        (filters.type.length === 0 || filters.type.includes(chord.type))
      );
    });
    return filtered;
  };

  const handleFilterChange = (event: SelectChangeEvent<string[]>) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const chooseRandomChords = () => {
    const filteredChords = getFilteredChords();
    setChords(filteredChords);
    if (filteredChords.length > 0) {
      const newSelectedChords = [];
      const newSelectedInversionIndices = [];
      for (let i = 0; i < numberOfChords; i++) {
        const randomIndex = Math.floor(Math.random() * filteredChords.length);
        newSelectedChords.push(randomIndex);

        if (filters.inversion.length > 0) {
          const inversionIndex = Math.floor(Math.random() * filters.inversion.length);
          newSelectedInversionIndices.push(parseInt(filters.inversion[inversionIndex]));
        } else {
          const randomInversionIndex = Math.floor(Math.random() * 3);
          newSelectedInversionIndices.push(randomInversionIndex);
        }
      }
      setSelectedChords(newSelectedChords);
      setSelectedInversionIndices(newSelectedInversionIndices);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleIntervalChange = (event: SelectChangeEvent<number>) => {
    const value = parseInt(event.target.value as string, 10);
    setIntervalSeconds(value);
  };

  const handleNumberOfChordsChange = (event: SelectChangeEvent<number>) => {
    const value = parseInt(event.target.value as string, 10);
    setNumberOfChords(value);
  };

  const playChord = async () => {
    if (!visualObject) return;
    const synth = new abcjs.synth.CreateSynth();
    const audioContext = new AudioContext();
    await synth.init({
      audioContext,
      visualObj: visualObject,
      millisecondsPerMeasure: 2500,
    });
    await synth.prime();
    synth.start();
  };

  const getChordTextStyle = () => {
    if (selectedChords.length === 1) {
      switch (selectedInversionIndices[0]) {
        case 0:
          return { backgroundColor: "rgb(6, 128, 16)", color: "#ffffff" };
        case 1:
          return { backgroundColor: "rgb(203, 110, 0)", color: "#ffffff" };
        case 2:
          return { backgroundColor: "rgb(170, 7, 74)", color: "#ffffff" };
        default:
          return { backgroundColor: "rgb(6, 128, 16)", color: "#ffffff" };
      }
    }
    return { backgroundColor: "rgb(170, 7, 74)", color: "#ffffff" };
  };

  return (
    <Container>
      <Typography marginTop={3} variant="h1" fontSize={32} gutterBottom>
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
        <Select value={intervalSeconds} onChange={handleIntervalChange}>
          <MenuItem value={5}>5 seconds</MenuItem>
          <MenuItem value={10}>10 seconds</MenuItem>
          <MenuItem value={15}>15 seconds</MenuItem>
        </Select>
        <Select value={numberOfChords} onChange={handleNumberOfChordsChange}>
          {[...Array(maxChordsAmount).keys()].map((num) => (
            <MenuItem key={num + 1} value={num + 1}>
              {num + 1} chord{num > 0 && "s"}
            </MenuItem>
          ))}
        </Select>
        <IconButton onClick={() => setIsChordPlayingOnChange(!isChordPlayingOnChange)}>
          {isChordPlayingOnChange ? <VolumeUp /> : <VolumeOff />}
        </IconButton>
      </Box>
      <Box mb={2} mt={4}>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Box
            boxShadow="8px 8px 21px -10px rgba(66, 68, 90, 1);"
            bgcolor={getChordTextStyle().backgroundColor}
            borderRadius={2}
            textAlign="center"
            paddingY={6}
            paddingX={2}
            width={isDesktop ? 600 : "100%"}
          >
            <Typography color={getChordTextStyle().color} variant="h2" fontSize="2rem">
              {selectedChords.map((selectedChordIndex, index) => {
                const selectedChord = chords[selectedChordIndex];
                const selectedInversion =
                  selectedChord?.inversions[selectedInversionIndices[index]];
                return `${selectedChord.name}${
                  selectedInversion.level === "Root" ? "" : ` (${selectedInversion.level})`
                }${index < selectedChords.length - 1 ? " | " : ""}`;
              })}
            </Typography>
          </Box>

          <Box marginY={2} ref={abcContainerRef} />
        </Box>
      </Box>
      <Box
        marginBottom={5}
        marginTop="auto"
        gap={2}
        display="flex"
        flexDirection={isDesktop ? "row" : "column"}
      >
        <Button size="large" variant="outlined" color="primary" onClick={handlePlayPause}>
          {isPlaying ? "Stop Interval" : "Start Interval"}
        </Button>
        <Button size="large" variant="contained" color="primary" onClick={playChord}>
          Play Chord
        </Button>
        <Button size="large" variant="contained" color="secondary" onClick={chooseRandomChords}>
          Get Random Chords
        </Button>
      </Box>
    </Container>
  );
};

export default App;

