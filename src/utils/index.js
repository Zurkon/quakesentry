export const parseDate = (newDate) => {
  const [month, date, year] = newDate.toLocaleDateString('en-US').split('/');

  return `${year}-${month.padStart(2, '0')}-${date.padStart(2, '0')}`
}

export const getMagnitudeScaleColor = (magnitude) => {
  if (magnitude >= 8.0) {
    return '#720000';
  }
  if (magnitude >= 7.0) {
    return '#f44336';
  }
  if (magnitude >= 6.1) {
    return '#ff9800';
  }
  if (magnitude >= 5.5) {
    return '#ffeb3b';
  }
  if (magnitude >= 2.5) {
    return '#4caf50';
  }

  return '#33c9dc';
}

// cyan - #33c9dc
// green - #4caf50
// yellow - #ffeb3b
// orange - #ff9800
// red - #f44336
// darkred - #720000