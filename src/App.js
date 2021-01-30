import React, { useState, useMemo, useEffect } from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Sidebar from './components/Sidebar';
import SideButton from './components/SideButton';
import MapContainer from './components/MapContainer';

import { parseDate } from './utils';

import './App.css';

function App() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [startDate, setStartDate] = useState(new Date(2011, 2, 10));
  const [endDate, setEndDate] = useState(new Date(2011, 3, 10));
  const [magnitude, setMagnitude] = useState({
    max: 0,
    min: 0
  })
  const [center, setCenter] = useState([30, 10]);
  const [zoom, setZoom] = useState(3);
  const [openSide, setOpenSide] = useState(false);

  const toggleOpen = () => {
    setOpenSide(!openSide);
  }

  const fetchData = () => {
    const BASE_URL = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';
    const startTime = startDate ? `&starttime=${parseDate(startDate)}` : '';
    const endTime = endDate ? `&endtime=${parseDate(endDate)}` : '';
    const minMag = magnitude.min > 0 ? `&minmagnitude=${magnitude.min}` : '';
    const maxMag = magnitude.max > 0 ? `&maxmagnitude=${magnitude.max}` : '';
    console.log(`${BASE_URL}${startTime}${endTime}${minMag}${maxMag}&limit=1000`);
    fetch(`${BASE_URL}${startTime}${endTime}${minMag}${maxMag}&limit=100`)
      .then(response => response.json())
      .then(data => setEarthquakes(data.features));
  }

  useEffect(() => {
    fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=200')
      .then(response => response.json())
      .then(data => setEarthquakes(data.features));
  }, [])

  // Change light or dark mode depending on user's browser preferences
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            // main: '#00b0ff',
            main: '#33eaff',
          },
          secondary: {
            main: '#2c387e'
          },
          background: {
            default: prefersDarkMode ? '#1e1e2f' : '#fafafa',
            paper: prefersDarkMode ? '#27293d' : 'fff'
          }
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <SideButton toggleOpen={toggleOpen} />
        <MapContainer center={center} zoom={zoom} data={earthquakes} />
        <Sidebar
          openSide={openSide}
          toggleOpen={toggleOpen}
          startDate={startDate}
          endDate={endDate}
          magnitude={magnitude}
          setMagnitude={setMagnitude}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          handleFetch={fetchData}
        />
        <h1> QuakeInfo </h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
