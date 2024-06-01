import React, { useState, useEffect } from "react";
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
    inversion: "all",
    accidental: "all",
    chord: "all",
    type: "all",
  });
  const [filteredChords, setFilteredChords] = useState(chords);
  const [selectedChordIndex, setSelectedChordIndex] = useState<number | null>(null);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [intervalSeconds, setIntervalSeconds] = useState<number>(10);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width:1024px)");

  const getInversionToDisplay = (chord: Chord) => {
    return chord.inversions[
      filters.inversion !== "all" ? parseInt(filters.inversion) : Math.floor(Math.random() * 3)
    ];
  };

  useEffect(() => {
    filterChords();
    chooseRandomChord();
  }, [filters]);

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
        (filters.accidental === "all" || chord.accidental === filters.accidental) &&
        (filters.chord === "all" || chord.chord === filters.chord) &&
        (filters.type === "all" || chord.type === filters.type)
      );
    });
    setFilteredChords(filtered);
  };

  const handleFilterChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const chooseRandomChord = () => {
    if (filteredChords.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredChords.length);
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

  return (
    <Box p={3}>
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
            >
              <MenuItem value="all">All</MenuItem>
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
            >
              <MenuItem value="all">All</MenuItem>
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
            >
              <MenuItem value="all">All</MenuItem>
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
            >
              <MenuItem value="all">All</MenuItem>
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
          {isPlaying ? "Pause" : "Play"}
        </Button>
        <Select value={intervalSeconds} onChange={handleIntervalChange}>
          <MenuItem value={5}>5 seconds</MenuItem>
          <MenuItem value={10}>10 seconds</MenuItem>
          <MenuItem value={15}>15 seconds</MenuItem>
        </Select>
        <Button variant="contained" color="secondary" onClick={chooseRandomChord}>
          Get a Random Chord
        </Button>
      </Box>
      <Box mb={2} mt={4}>
        {filteredChords.map((chord, index) => (
          <Box
            key={index}
            display={index === selectedChordIndex ? "flex" : "none"}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
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
              {getInversionToDisplay(chord)?.name}
            </Typography>
            <Box
              ref={(el: HTMLElement | null) => {
                if (el && selectedChordIndex !== null && index === selectedChordIndex) {
                  abcjs.renderAbc(el, getInversionToDisplay(chord)?.abc, {
                    responsive: "resize",
                    add_classes: true,
                    staffwidth: isDesktop ? 600 : 200,
                  });
                }
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default App;

