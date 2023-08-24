'use Client';

import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

interface Props {
  name: string;
  value: string;
  label: string;
  placeholder?: string;
  items: string[];
  handleChange: (e: any) => void;
  disabled?: boolean;
}

function Selector({
  name,
  value,
  label,
  items,
  placeholder = '',
  disabled = false,
  handleChange,
}: Props): JSX.Element {
  return (
    <FormControl>
      <InputLabel shrink sx={{ color: disabled ? '#B6B6B6' : 'black' }}>
        {label}
      </InputLabel>
      <Select
        name={name}
        value={value}
        label={label}
        onChange={handleChange}
        disabled={disabled}
        size="small"
        displayEmpty
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <Typography sx={{ color: '#B6B6B6' }}>{placeholder}</Typography>;
          }

          return selected;
        }}
        sx={{
          backgroundColor: 'white',
        }}
      >
        {items.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Selector;
