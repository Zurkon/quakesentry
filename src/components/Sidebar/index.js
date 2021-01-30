import React, { useState } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Snackbar, Typography, IconButton } from '@material-ui/core';

import { CgSearch } from 'react-icons/cg';

import DateInput from '../DateInput';

import logo from '../../assets/usgs-logo.svg';

import { SidebarContainer, CloseIcon, Icon, Logo, LogoContainer } from './styles';

const Sidebar = ({ openSide, toggleOpen, startDate, endDate, magnitude, setMagnitude, setStartDate, setEndDate, handleFetch }) => {
  const [open, setOpen] = useState(false);

  const handleButton = () => {
    if (endDate || magnitude.min > 0 || magnitude.max > 0) {
      handleFetch();
      toggleOpen();
    } else {
      setOpen(true);
    }
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleChange = (event) => {
    const name = event.target.name;
    setMagnitude({
      ...magnitude,
      [name]: event.target.value
    });
  }

  return (
    <SidebarContainer isOpen={openSide}>
      <Icon>
        <CloseIcon onClick={toggleOpen} />
      </Icon>
      <div style={{ textAlign: 'center' }}>
        <Typography variant="h4">Filter Parameter</Typography>
        <Typography variant="subtitle1">For better accuracy</Typography>
        <Typography variant="subtitle1">fill at least 3 fields</Typography>
      </div>
      <DateInput labelText={"Start Time"} date={startDate} handleDate={setStartDate} />
      <DateInput labelText={"End Time"} date={endDate} handleDate={setEndDate} />

      <FormControl variant="outlined">
        <InputLabel htmlFor="minMag-input">Min Magnitude</InputLabel>
        <Select
          native
          value={magnitude.min}
          onChange={handleChange}
          label="MinMagnitude"
          inputProps={{
            name: 'min',
            id: 'minMag-input',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
        </Select>
      </FormControl>

      <FormControl variant="outlined">
        <InputLabel htmlFor="maxMag-input">Max Magnitude</InputLabel>
        <Select
          native
          value={magnitude.max}
          onChange={handleChange}
          label="MaxMagnitude"
          inputProps={{
            name: 'max',
            id: 'maxMag-input',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
        </Select>
      </FormControl>

      <Button
        variant="contained"
        color="secondary"
        style={{
          width: '150px',
          justifySelf: 'center'
        }}
        startIcon={<CgSearch />}
        onClick={handleButton}
      >
        Search
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        onClose={handleClose}
        message="Fill at least one field to start search"
        action={
          <IconButton size="small" aria-label="close" onClick={handleClose}>
            <CloseIcon iconsize="small" />
          </IconButton>
        }
      />
      <LogoContainer>
        <Typography variant="subtitle2" align="center"> Powered by </Typography>
        <Logo src={logo} />
      </LogoContainer>
    </SidebarContainer>
  );
};

export default Sidebar;