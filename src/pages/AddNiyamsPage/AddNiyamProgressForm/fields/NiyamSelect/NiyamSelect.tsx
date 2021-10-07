import React from 'react';
import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';

function NiyamSelect(): JSX.Element {
  return (
    <Grid item>
      <FormControl fullWidth data-testid='niyam-select-field'>
        <InputLabel id='select-niyam-label'>Select Niyam</InputLabel>
        <Select labelId='select-niyam-label' id='select-niyam' label='Select Niyam'>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
}

export default NiyamSelect;
