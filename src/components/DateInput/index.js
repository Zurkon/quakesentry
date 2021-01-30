import React from 'react';

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const DateInput = ({ labelText, date, handleDate }) => {

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        label={labelText}
        format="dd/MM/yyyy"
        value={date}
        onChange={date => handleDate(date)}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateInput;