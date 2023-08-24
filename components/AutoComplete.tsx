import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

interface Props {
  options: any[];
  value: string;
  inputValue: string;
  onChange: (event: any, newValue: string | null) => void;
  onInputChange: (event: any, newInputValue: any) => void;
  label: string;
  placeholder: string;
  disabled?: boolean;
}

function AutoComplete({
  options,
  value,
  inputValue,
  onChange,
  onInputChange,
  label,
  placeholder,
  disabled = false,
}: Props) {
  return (
    <Autocomplete
      disablePortal
      options={options}
      value={value}
      inputValue={inputValue}
      onChange={onChange}
      onInputChange={onInputChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          InputLabelProps={{ shrink: true }}
          disabled={disabled}
        />
      )}
      renderOption={(props, option) => (
        <li {...props} key={option}>
          {option}
        </li>
      )}
      size="small"
      sx={(theme) => ({
        [theme.breakpoints.down('md')]: {
          width: '100%',
        },
        [theme.breakpoints.up('md')]: {
          width: '200px',
        },
        backgroundColor: 'white',
      })}
    />
  );
}

export default AutoComplete;
