import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Slider,
  Typography,
  Avatar,
  Grid,
  Chip,
  MenuItem,
  Switch,
  Button,
  IconButton,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { instructors } from "../data/instructors";


const theme = createTheme({
  palette: {
    primary: {
      main: "#2196D4",
    },
    secondary: {
      main: "#F2178D",
    },
  },
});

const SearchBar = ({ setSearchQuery }) => (
  <TextField
    variant="outlined"
    fullWidth
    placeholder="Find an instructor"
    onChange={(e) => setSearchQuery(e.target.value)}
    sx={{ mb: 2 }}
  />
);

const AdvancedSearch = ({ filters, setFilters }) => {
  const handleSliderChange = (event, newValue) => {
    setFilters({ ...filters, price: newValue });
  };

  const handleCheckboxChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.checked });
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: typeof value === "string" ? value.split(",") : value,
    }));
  };

  return (
    <Box>
      <Typography variant="h6" component="strong">
        Filters
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography>{filters.price[0]}</Typography>
        <Slider
          value={filters.price}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          min={10}
          max={1000}
          sx={{ flex: 1, mx: 2 }}
        />
        <Typography>{filters.price[1]}</Typography>
      </Box>
      <TextField
        select
        fullWidth
        label={<strong>Teacher's Country</strong>}
        SelectProps={{
          multiple: true,
          value: filters.country,
          onChange: handleFilterChange,
          renderValue: (selected) => selected.join(", "),
        }}
        name="country"
        sx={{ mb: 2 }}
      >
        <MenuItem value="Turkey">Turkey</MenuItem>
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="UK">UK</MenuItem>
        <MenuItem value="Germany">Germany</MenuItem>
        <MenuItem value="France">France</MenuItem>
        <MenuItem value="Canada">Canada</MenuItem>
        <MenuItem value="Italy">Italy</MenuItem>
        <MenuItem value="Spain">Spain</MenuItem>
      </TextField>
      <TextField
        select
        fullWidth
        label={<strong>Languages Spoken</strong>}
        SelectProps={{
          multiple: true,
          value: filters.language,
          onChange: handleFilterChange,
          renderValue: (selected) => selected.join(", "),
        }}
        name="language"
        sx={{ mb: 2 }}
      >
        <MenuItem value="English">English</MenuItem>
        <MenuItem value="Turkish">Turkish</MenuItem>
        <MenuItem value="German">German</MenuItem>
        <MenuItem value="French">French</MenuItem>
        <MenuItem value="Italian">Italian</MenuItem>
        <MenuItem value="Spanish">Spanish</MenuItem>
      </TextField>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography component="strong">
          View native-language instructors only
        </Typography>
        <Switch
          checked={filters.nativeLanguage}
          onChange={handleCheckboxChange}
          name="nativeLanguage"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography component="strong">
          Highly rated and reliable instructors
        </Typography>
        <Switch
          checked={filters.superTeacher}
          onChange={handleCheckboxChange}
          name="superTeacher"
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle1" component="strong">
          Available Hours
        </Typography>
        <Box>
          {[
            "09:00-12:00",
            "12:00-15:00",
            "15:00-18:00",
            "18:00-21:00",
            "21:00-00:00",
            "00:00-03:00",
            "03:00-06:00",
            "06:00-09:00",
          ].map((hour) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={filters.availableHours.includes(hour)}
                  onChange={(e) => {
                    const newHours = e.target.checked
                      ? [...filters.availableHours, hour]
                      : filters.availableHours.filter((h) => h !== hour);
                    setFilters({ ...filters, availableHours: newHours });
                  }}
                  name="availableHours"
                />
              }
              label={hour}
              key={hour}
            />
          ))}
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle1" component="strong">
          Available Days
        </Typography>
        <Box>
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((day) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={filters.availableDays.includes(day)}
                  onChange={(e) => {
                    const newDays = e.target.checked
                      ? [...filters.availableDays, day]
                      : filters.availableDays.filter((d) => d !== day);
                    setFilters({ ...filters, availableDays: newDays });
                  }}
                  name="availableDays"
                />
              }
              label={day}
              key={day}
            />
          ))}
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle1" component="strong">
          Areas of Expertise
        </Typography>
        <Box>
          {[
            "Everyday English",
            "Business English",
            "IELTS",
            "Beginner",
            "English for Kids",
            "TOEFL",
          ].map((expertise) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={filters.expertise.includes(expertise)}
                  onChange={(e) => {
                    const newExpertise = e.target.checked
                      ? [...filters.expertise, expertise]
                      : filters.expertise.filter((exp) => exp !== expertise);
                    setFilters({ ...filters, expertise: newExpertise });
                  }}
                  name="expertise"
                />
              }
              label={expertise}
              key={expertise}
            />
          ))}
        </Box>
      </Box>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={() => setFilters(filters)}
      >
        Filter
      </Button>
    </Box>
  );
};

const Results = ({ results }) => {
  const navigate = useNavigate();

  const handleInstructorClick = (instructor) => {
    navigate(`/instructors/${instructor.id}`);
  };

  return (
    <Grid container spacing={2}>
      {results.map((result, index) => (
        <Grid key={index} size={{ xs: 12 }}>
          <Box
            display="flex"
            alignItems="center"
            p={2}
            border="1px solid #ccc"
            borderRadius={2}
            sx={{ cursor: "pointer" }}
            onClick={() => handleInstructorClick(result)}
          >
            <Avatar
              alt={result.name}
              sx={{ width: 56, height: 56, mr: 2 }}
            />
            <Box>
              <Typography variant="h6">{`${result.name}, Age ${result.age}, ${result.gender}`}</Typography>
              <Typography variant="body2" color="textSecondary">
                {result.country}
              </Typography>
              <Box display="flex" alignItems="center" mb={1}>
                {Array.from({ length: Math.floor(result.rating) }).map(
                  (_, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      sx={{ color: "#F2B417" }}
                    >
                      ★
                    </Typography>
                  )
                )}
                {Array.from({ length: 5 - Math.floor(result.rating) }).map(
                  (_, i) => (
                    <Typography key={i} variant="body2" sx={{ color: "#ccc" }}>
                      ★
                    </Typography>
                  )
                )}
              </Box>
              <Typography variant="body2" gutterBottom>
                {result.bio}
              </Typography>
              <Box display="flex" alignItems="center" flexWrap="wrap">
                {result.isNative && (
                  <Chip label="Native" color="primary" sx={{ mr: 1, mb: 1 }} />
                )}
                {result.isSuperTeacher && (
                  <Chip
                    label="Super Teacher"
                    sx={{
                      mr: 1,
                      mb: 1,
                      backgroundColor: "#F2178D",
                      color: "#fff",
                    }}
                  />
                )}
                <Chip
                  label={result.expertise.join(", ")}
                  sx={{ mr: 1, mb: 1 }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

const InstructorListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    price: [10, 1000],
    country: [],
    language: [],
    nativeLanguage: false,
    superTeacher: false,
    availableHours: [],
    availableDays: [],
    expertise: [],
  });
  const [results, setResults] = useState(instructors);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const filterResults = () => {
    let filteredResults = instructors;
    if (searchQuery) {
      filteredResults = filteredResults.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (filters.country.length > 0) {
      filteredResults = filteredResults.filter((item) =>
        filters.country.includes(item.country)
      );
    }
    if (filters.language.length > 0) {
      filteredResults = filteredResults.filter((item) =>
        filters.language.some((lang) => item.languages.includes(lang))
      );
    }
    if (filters.nativeLanguage) {
      filteredResults = filteredResults.filter((item) => item.isNative);
    }
    if (filters.superTeacher) {
      filteredResults = filteredResults.filter((item) => item.isSuperTeacher);
    }
    if (filters.availableHours.length > 0) {
      filteredResults = filteredResults.filter((item) =>
        filters.availableHours.some((hour) =>
          item.availableHours.includes(hour)
        )
      );
    }
    if (filters.availableDays.length > 0) {
      filteredResults = filteredResults.filter((item) =>
        filters.availableDays.some((day) => item.availableDays.includes(day))
      );
    }
    if (filters.expertise.length > 0) {
      filteredResults = filteredResults.filter((item) =>
        filters.expertise.some((exp) => item.expertise.includes(exp))
      );
    }
    filteredResults = filteredResults.filter(
      (item) => item.price >= filters.price[0] && item.price <= filters.price[1]
    );

    setResults(filteredResults);
  };

  useEffect(() => {
    filterResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, filters]);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <SearchBar setSearchQuery={setSearchQuery} />
          </Grid>
          {isSmallScreen ? (
            <>
              <Grid size={{ xs: 12 }}>
                <IconButton onClick={toggleDrawer(true)}>
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="left"
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                >
                  <Box
                    sx={{ width: 250, p: 2 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                  >
                    <AdvancedSearch filters={filters} setFilters={setFilters} />
                  </Box>
                </Drawer>
              </Grid>
            </>
          ) : (
            <Grid size={{ xs: 2 }}>
              <AdvancedSearch filters={filters} setFilters={setFilters} />
            </Grid>
          )}
          <Grid size={{ xs: isSmallScreen ? 12 : 10 }}>
            <Results results={results} />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default InstructorListing;
