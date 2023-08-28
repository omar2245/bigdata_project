'use client';

import React from 'react';
import { Button, Stack } from '@mui/material';

import { FormProps } from '@/type/type';
import { taiwanCityInfo, yearsMenu } from '@/utils/menuItems';
import Selector from './Selector';
import AutoComplete from './AutoComplete';

function CitySelectForm({
  formValues,
  setFormValues,
  inputValue,
  setInputValue,
  onSubmit,
}: FormProps) {
  const citysMenu = taiwanCityInfo.map((item) => item.name);

  const districtMenu: string[] | undefined =
    taiwanCityInfo.find((item) => item.name === formValues.city)?.district ?? [];

  return (
    <Stack
      direction={{ xs: 'column', sm: 'column', md: 'row' }}
      spacing={1.5}
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Stack alignSelf="flex-start">
        <Selector
          items={yearsMenu}
          label="年份"
          name="year"
          value={formValues.year}
          handleChange={(e: any) => {
            setFormValues((prev) => ({ ...prev, year: e.target.value }));
          }}
        />
      </Stack>
      <AutoComplete
        options={citysMenu}
        value={formValues.city}
        inputValue={inputValue.city}
        onChange={(event: any, newValue: string | null) => {
          setFormValues((prev) => ({ ...prev, city: newValue ?? '', district: '' }));
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue((prev) => ({ ...prev, city: newInputValue ?? '', district: '' }));
        }}
        label="縣/市"
        placeholder="請選擇 縣/市"
      />
      <AutoComplete
        options={districtMenu}
        value={formValues.district}
        inputValue={inputValue.district}
        onChange={(event: any, newValue: string | null) => {
          setFormValues((prev) => ({ ...prev, district: newValue ?? '' ?? '' }));
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue((prev) => ({ ...prev, district: newInputValue ?? '' ?? '' }));
        }}
        label="區"
        placeholder="請先選擇 縣/市"
        disabled={formValues.city.length === 0}
      />

      <Button
        variant="contained"
        onClick={() => onSubmit(formValues)}
        disabled={
          formValues.year.length === 0 ||
          formValues.city.length === 0 ||
          formValues.district.length === 0
        }
        sx={(theme) => ({
          [theme.breakpoints.down('md')]: {
            width: '100%',
          },
        })}
      >
        Submit
      </Button>
    </Stack>
  );
}

export default CitySelectForm;
